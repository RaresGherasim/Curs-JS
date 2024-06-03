import { v4 as uuidv4 } from 'uuid';

let date = new Date().toJSON();


let newDeviceModel = {
    "id": uuidv4(),
    "name": "NewDevice",
    "metering": {
        "activeEnergy": {
            "value": 0,
            "date": date
        },
        "activePower": {
            "value": 0,
            "date": date
        },
        "actualLightState": {
            "value": 0,
            "date": date
        },
        "operatingHours": {
            "value": 0,
            "date": date
        },
        "powerFactor": {
            "value": 0,
            "date": date
        },
        "supplyCurrent": {
            "value": 0,
            "date": date
        },
        "supplyVoltage": {
            "value": 0,
            "date": date
        },
        "lampCommandMode": {
            "value": 0,
            "date": date
        },
        "controllerTemperature": {
            "value": 0,
            "date": date
        },
        "controllerMemoryFree": {
            "value": 0,
            "date": date
        },
        "lastSuccessfulCommunication": {
            "value": date,
            "date": date
        },
        "lampSupplyLossCount": {
            "value": 0,
            "date": date
        },
        "controllerOperatingHours": {
            "value": 0,
            "date": date
        },
        "communicationSetupTime": {
            "value": 0,
            "date": date
        },
        "firmwareUpdateStatus": {
            "value": "Updated",
            "date": date
        },
        "driverOperatingHours": {
            "value": 0,
            "date": date
        }
    },
    "firstAccessTime": date,
    "lastAccessTime": date,
    "lastOkStatusChangeTime": date,
    "attributes": {
        "calendarName": "Abrud Standard",
        "lampWattage": 64,
        "fixing": {
            "connectionBox": "24/7"
        },
        "installation": {
            "maintenanceGroup": "Update4362"
        }
    },
    "failures": {
        "connectionLost": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "communicationFailure": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "lampFailure": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "lampPowerTooHigh": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "lampPowerTooLow": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "relayFailure": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "powerFactorTooLow": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "highControllerTemperature": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "supplyVoltageTooHigh": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "supplyVoltageTooLow": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "controlGearFailure": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "controlGearCommFailure": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "daliThermalShutdown": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "daliThermalDerating": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "supplyLoss": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "lowCommunication": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "luminaireAssetMismatch": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "luminaireAssetInformationMissing": {
            "value": 0,
            "date": date,
            "level": 0
        },
        "luminaireFaultyRFID": {
            "value": 0,
            "date": date,
            "level": 0
        }
    },
    "tenant": "ro-ab-abrud",
    "createdAt": date,
    "controllerCoords": {
        "type": "Point",
        "coordinates": [
            0,
            0
        ]
    },
    "configuration": {
        "deviceId": "14EFCF011101AB1B",
        "luminaireSpecification": "FLEXIT-20LEDs-1000mA-64W-5393AS",
        "firmwareVersion": "4.3.6.2",
        "firmwareBuildNumber": "4.3.6.2_CLEAN_:8ffdf4c000",
        "bootloaderVersion": "6.1.0.0",
        "meshVersion": "1.7.1",
        "imsi": "204047168795251",
        "imei": "866728066470534",
        "ipAddress": "10.40.236.158:9002",
        "networkOperator": "VODAFONE",
        "assetId": "E00401D005F2F6E2",
        "dimmingType": "DALI",
        "daliIndex": "1",
        "daliCount": 1,
        "catalogId": "479827",
        "powerFactorThreshold": 0.5,
        "minDimValue": 10,
        "maintenanceFactor": 100,
        "maintenanceInterval": 100000,
        "lowPowerLimitMinDim": 4.48,
        "lowPowerLimitMaxDim": 48,
        "hardwareType": "Default",
        "highPowerLimitMinDim": 12.6,
        "highPowerLimitMaxDim": 83,
        "luminaireModel": "FLEXIT",
        "driverName": "EBS-080S105BT2",
        "hasSensor": false,
        "setHasSensor": false,
        "luminaireSocket": "NEMA LTE",
        "photometricEngine": "5393AS",
        "numberOfLeds": 20,
        "ledColourTemperature": "WW",
        "luminaireColour": "AKZO200BS",
        "luminaireIdentificationNumber": "0000000000000000",
        "luminaireIdentification": "na",
        "luminaireLumen": 0,
        "controllerBrand": "Schréder",
        "controllerModel": "Owlet FOUR",
        "controllerInstallationDate": date,
        "fallbackDimmingLevel": 100,
        "fallbackPhotocell": true,
        "socketType": "NEMA LTE",
        "selfTestCounterTarget": 5,
        "selfTestCounter": 0,
        "selfTestIsRunning": false,
        "selfTestResult": "Passed",
        "selfTestTimestamp": date,
        "selfTestSensorTriggerCounter": 0,
        "luCoPoleHolderMount": false,
        "globalInternationalNumber": "0000000000000000",
        "meshNetworkName": "HYPERION",
        "meshPanId": 21554
    },
    "coords": {
        "type": "Point",
        "coordinates": [
            0,
            0
        ]
    },
    "core": {
        "type": "LightPoint",
        "groupPath": "Hyperion/Romania/ro-ab-abrud/ro-ab-abrud/",
        "unmanaged": false,
        "simulated": false,
        "commissioning": {
            "hasCommissioning": true,
            "commissioned": true,
            "status": "done",
            "date": date,
            "errors": "",
            "updates": {
                "pending": false,
                "fields": [],
                "reasons": [],
                "deleted": []
            }
        },
        "schemaId": "schreder_g4_lp",
        "model": "Owlet IV [LightPoint]",
        "address": {
            "street_address": "",
            "city": "",
            "zipcode": "",
            "country": ""
        },
        "activeFailures": [],
        "systematics": [],
        "labels": []
    },
    "status": 1
}

export default newDeviceModel;