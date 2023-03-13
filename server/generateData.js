const { faker } = require('@faker-js/faker')
const { connect, rides, drivers } = require('./configDB')

const generateRidesData = async () => {
    await connect()
    const docs = []
    for (let i = 0; i < 50; i++) {
        const sourceLatlng = faker.address.nearbyGPSCoordinate([12, 77], 100, true).map(a => parseInt(a, 10))
        const destinationLatlng = faker.address.nearbyGPSCoordinate([12, 77], 100, true).map(a => parseInt(a, 10))
        const sourceAddress = faker.address.streetAddress(true)
        const destinationAddress = faker.address.streetAddress(true)

        docs.push({
            user_id: 1,
            source: {
                latlng: {
                    type: 'Point',
                    coordinates: sourceLatlng
                },
                address: sourceAddress
            },
            destination: {
                latlng: {
                    type: 'Point',
                    coordinates: destinationLatlng
                },
                address: destinationAddress
            }

        })
    }
    await rides.insertMany(docs)
    // await rides.deleteMany({})
}

const generateDriversData = async () => {
    await connect()
    const docs = []
    for (let i = 0; i < 50; i++) {
        const location = faker.address.nearbyGPSCoordinate([12, 77], 100, true).map(a => parseInt(a, 10))
        const id = i

        docs.push({
            id,
            location: {
                coordinates: location,
                type: 'Point'
            }
        })
    }
    await drivers.insertMany(docs)
    // await drivers.deleteMany({})
}

generateRidesData()
generateDriversData()
