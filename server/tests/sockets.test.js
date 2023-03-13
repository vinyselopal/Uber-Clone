const { io } = require('../index.js')
const { nearestPendingRides } = require('../models/ridesModel')
const Client = require('socket.io-client')

describe('my awesome project', () => {
  const clientSocket = new Client('http://localhost:800')
  beforeAll((done) => {
    clientSocket.on('connect', done)
  })
  afterAll(() => {
    io.close()
    clientSocket.close()
  })

  // test("should work", (done) => {
  //     clientSocket.on("hello", (arg) => {
  //         expect(arg).toBe("world");
  //         done();
  //     });
  //     serverSocket.emit("hello", "world");
  // });

  test('should work (with ack)', async (done) => {
    serverSocket.on('available', async (location) => {
      const ride = await nearestPendingRides(location)
      console.log('ride in test', ride)
      done()
    })
    clientSocket.emit('available', [77, 12])
  })
})
