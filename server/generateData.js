const { faker } = require('@faker-js/faker')
const { connect, rides } = require('./configDB')

const generateRidesData = async () => {
    await connect()
    const docs = []
    for (let i = 0; i < 50; i++) {
        const sourceLatlng = faker.address.nearbyGPSCoordinate([12, 77], 100, true)
        const destinationLatlng = faker.address.nearbyGPSCoordinate([12, 77], 100, true)
        const sourceAddress = faker.address.streetAddress(true)
        const destinationAddress = faker.address.streetAddress(true)

        docs.push({
            user_id: 1,
            source: {
                latlng: sourceLatlng,
                address: sourceAddress
            },
            destination: {
                latlng: destinationLatlng,
                address: destinationAddress
            }
        })
    }
    console.log(docs)
    await rides.insertMany(docs)
}

generateRidesData()