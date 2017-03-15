import _ from 'lodash';

var element = document.getElementById('output');
element.innerHTML = _.join(['Hello','webpack'], ' ');
