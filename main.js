var noun = 'testing out more stuff'

var adjective = 'stuff'





































// *** Document Edit Code *** //


var madlibButton = document.getElementById('add_madlib');
var madlibCode = document.getElementById('add_my_code');

madlibButton.onclick = function () {
    var noun = document.getElementById('noun');
    var adjective = document.getElementById('adjective');

    var nounIn = noun.value;
    var adjIn = adjective.value;
    if(checkInputs(nounIn, adjIn) === true) {
        document.getElementById('noun_lib').innerHTML = nounIn;
        document.getElementById('adj_lib').innerHTML = adjIn;
        document.getElementById('noun_var').innerHTML = nounIn;
        document.getElementById('adj_var').innerHTML = adjIn;
        noun.value = '';
        adjective.value = '';
    }
};

madlibCode.onclick = function () {
    document.getElementById('noun_lib').innerHTML = noun;
    document.getElementById('adj_lib').innerHTML = adjective;
    document.getElementById('noun_var').innerHTML = noun;
    document.getElementById('adj_var').innerHTML = adjective;
}




function checkInputs (in1, in2) {
    if (in1.trim() === '' && in2.trim() === '') {
        console.log('inputs have to be valid');
        return false;
    } else {
        return true;
    }
}
