import WallyStats from '../../../models/stats';

function statsRoutes(server) {
  server.route([
    {
      method: 'GET',
      path: '/prueba',
      handler: function (request, h) {
        return '<h1>¡La Prueba Stats está funcionando!</h1>';
      }
    },
    {
      method: 'GET',
      path: '/api/v1/allStats',
      handler: function (request, reply) {
        return WallyStats.find();
      }
    },
    {
      method: 'POST',
      path: '/api/v1/stats/insert',
      handler: function (request, reply) {
        const { leftScale, rightScale, Month } = request.payload;
        const stats = new WallyStats({
          leftScale,
          rightScale,
          Month
        });
        return stats.save();
      }
    }
  ]);
}

export default statsRoutes;
