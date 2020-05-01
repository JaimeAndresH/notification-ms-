var servicesNotifications = require('fcm-node');

const notificationsend = module.exports;
const serverKey = 'AIzaSyDkyb8uZ6WGrqpydJuslvTNeUcu_I08M6w';
var fcm = new servicesNotifications(serverKey);

notificationsend.Sendnotifi = async (deviceToken) =>{
    const message = {
    to: deviceToken,
    collapse_key: 'type a',

    notification: {
        title: 'easybuy',
        body: 'cuerpo de la notificacion '
    },
    }

    fcm.send(message, function(err, response){
    if (err) {
        console.log('esto a fallado');
        console.log(err)
    }
    else {
        console.log(response);
    }
});
}
