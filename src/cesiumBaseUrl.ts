// This file is used to set the base URL for Cesium assets to match the public path defined in Webpack.
// We use the webpack public path because this is set at runtime to support the Grafana Cloud CDN.
// It is imported as a side effect in the main entry point (module.ts) to ensure that it is executed before any Cesium code is loaded.
window.CESIUM_BASE_URL = `${__webpack_public_path__}cesium/`;
