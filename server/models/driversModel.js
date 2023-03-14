const { drivers } = require('../configDB')
const { ObjectId } = require('mongodb')

const checkDriverAvailability = async (driverID) => {
    const queryCriteria = {
        _id: new ObjectId(driverID),
        status: 'unavailable'
    }
    const response = await drivers.find(queryCriteria).toArray()
    if (response === []) return false
    return true
}

const updateDriverStatusModel = async (driverID) => {
    const update = {
        $set: {
            status: 'ride'
        }
    }

    const filter = {
        _id: new ObjectId(driverID)
    }

    const response = await drivers.updateOne(filter, update)
    console.log(response)
}

(async () => { await updateDriverStatusModel('64100469ea29e1366e6d1c0b') })()

module.exports = { checkDriverAvailability, updateDriverStatusModel }
