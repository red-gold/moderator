const {google} = require('googleapis'); 
class AppEngine{
    appEngine = {};
    constructor(appId){
        this.appEngine = google.appengine({version:'v1', auth: require('/home/huynhnguyen/gCloudCredential/moderatorDev-4e820c45e65a.json')});
        console.log({appengine: this.appEngine});
        // appengine.apps.get({appsId:'moderatordev-223307'}).then(resp=>{
        //     console.log(resp);
        // })
        
    }
    listServices(){
        //TODO: list services deploy on the appEngine
    }
    get(service){
        //TODO: get current service configure
    }
    update(service){
        //TODO: update service configue
    }
}