// https://github.com/illuspas/Node-Media-Server#npm-version-recommended

const NodeMediaServer = require("node-media-server");

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: "*"
  }
};

let server = new NodeMediaServer(config);
server.run();
