<p align="center">
  <h1 align="center">📡 Azure IoT 📍</h1>
  <p align="center">
    <i>Sending data from the edge</i>
  </p>
</p>

<p align="center">
  <a href="https://choosealicense.com/licenses/mit/">
    <img alt="license" src="https://img.shields.io/github/license/sjimenez44/AzureIot?style=flat-square&color=lightblue"/>
  </a>
  <a href="https://github.com/sjimenez44/AzureIot/actions/workflows/ci.yml/">
    <img alt="tests status" src="https://github.com/sjimenez44/AzureIot/actions/workflows/ci.yml/badge.svg"/>
  </a>
</p>

<p align="center">
  <p align="center">
    Browse the <a href="https://github.com/sjimenez44/AzureIot/releases">releases</a>.
  </p>
</p>

------------------------

## Features

- 🧪 &nbsp; Receiving data from the edge and formatting it
- 🏭 &nbsp; Save the data in Azure Table Storage

## API Reference

#### POST save data of sensor

```
  POST /api/SaveData
```

| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `sensorId` | `string` | **Required**. Id of the sensor    |
| `type`     | `string` | **Required**. Type of the data    |
| `value`    | `double` | **Required**. Value sensed        |

## Environment Variables

To run this project, you will need to add the following file `app.config` with the following content:

```json
{
  "useDevelopmentStorage": false,
  "connectionString": "<your_connection_string>",
  "tableName": "SensorData"
}
```