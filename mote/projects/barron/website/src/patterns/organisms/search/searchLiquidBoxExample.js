//code that is shown as an example in of Liquid Box AJAX calls, this is copied into the Usage code block manually!

var style = document.createElement('link');
style.type = 'text/css';
style.rel = 'stylesheet'
style.href = 'http://leaverou.github.io/awesomplete/awesomplete.css';
document.head.appendChild(style);

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://leaverou.github.io/awesomplete/awesomplete.js';
document.head.appendChild(script);
// destroy the default jquery-ui
$('#txtMasterSearch').autocomplete('destroy');
// function to instatniate awesomplete on input field #txtMasterSearch
(function() {
    var xhr;
    var input = document.getElementById('txtMasterSearch');
    var config = {
        'minChars': 3,
        'replace': function(text) {
            this.input.value = text.label;
        }
    };
    var myAwesomeComplete = new Awesomplete(input, config);

    input.addEventListener('input', function(e) {
        var limit = config.minChars || 2;
        var value = e.target.value;
        if (value.length >= limit) {
            getData(value);
        }
    });


    function getData(requestValue) {
        // Old compatibility code, no longer needed.
        if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE 6 and older
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }
        xhr.open('POST', '../Services/Core.asmx/SearchProducts', true);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.onload = function() {
            if (!xhr.onloadDone) {
                xhr.onloadDone = true;
                xhrCallback();
            }
        };
        xhr.onreadystatechange = function() {
            if (('loaded' === xhr.readyState || 'loaded' === xhr.readyState) && !xhr.onloadDone) {
                xhr.onloadDone = true;
                xhrCallback();
            }
        }

        function xhrCallback() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText).d.map(function(item) {
                    return {
                        'label': item.split('|')[3] + ' (' + item.split('|')[4] + ')',
                        'data': item,
                        'value': {
                            'data': item,
                            'path': item.split('|')[3]
                        }
                    }
                });
                myAwesomeComplete.list = data
                myAwesomeComplete.evaluate();
            }
        };
        xhr.send('{Keyword:"' + requestValue + '"}');
    }


    input.addEventListener('awesomplete-select', function(e) {
        window.location = '/Products/' + e.text.value.path + '.aspx';
    });
}());
