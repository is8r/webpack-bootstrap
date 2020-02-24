import '../stylesheets/styles.scss';

import $ from 'jquery';
import 'bootstrap';
import Vue from "vue"
import Hello from './components/Hello.vue'

$(function() {
  console.log("ready");
});

document.addEventListener('DOMContentLoaded', function() {
  var app = new Vue({
    el: "#app",
    template: "<Hello/>",
    components: { Hello }
  });
});
