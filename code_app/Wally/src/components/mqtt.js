import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';

export default function MQTTClient(command) {
  init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {}
  });

  const client = new Paho.MQTT.Client(
    'm24.cloudmqtt.com',
    34805,
    'web_' + parseInt(Math.random() * 100, 10)
  );

  const options = {
    useSSL: true,
    userName: 'ydgftwoz',
    password: 'D1hzagk3oj49',
    onSuccess: onConnect,
    onFailure: doFail
  };

  function onConnect() {
    console.log('onConnect');
    const topic = 'Wally/controll';
    client.subscribe(topic);
    message = new Paho.MQTT.Message(command);
    message.destinationName = topic;
    client.send(message);
  }

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log('onConnectionLost:' + responseObject.errorMessage);
    }
  }

  function onMessageArrived(message) {
    console.log('onMessageArrived:' + message.payloadString);
  }

  function doFail(e) {
    console.log('error', e);
  }

  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  client.connect(options);
  return client;
}
