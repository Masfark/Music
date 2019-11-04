let geoSpoofCode = conf => `
  (function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition = function(success) { return success(${conf}); }
    } else {
    console.error('Geolocation is not supported in this browser');
    }
  })()
`

browser.runtime
  .sendMessage({ type: 'request-spoofed-coords' })
  .then(curCoords => {
    //json from state, contains current data center location, proxy must be ON
    if (curCoords) {
      let script = document.createElement('script')
      script.textContent = geoSpoofCode(curCoords)
      document.documentElement.appendChild(script)
      script.remove()
    }
  })
