function myFunction() {
    var request = new Request('http://educacao.dadosabertosbr.com/api/escola/26124297', {
        method: 'GET',
        mode: 'no-cors',
        dataType: 'json',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    var myHeaders = new Headers({
        'Content-Type': 'application/json'
    });
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'no-cors'
    };
    //http://data.cityofnewyork.us/resource/yjub-udmw.json
    
    fetch('http://educacao.dadosabertosbr.com/api/escola/26124297', myInit).then(response => response.text()).then(result => {
        console.log(result);
    }).catch(err => {
        console.error('Failed retrieving information', err);
    });
    
    
}