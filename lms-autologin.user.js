// ==UserScript==
// @name         lmsオートログイン
// @namespace    lmsオートログイン
// @version      0.1
// @description  パスワード自動入力
// @author       You
// @match        https://lms.gifu-nct.ac.jp/login/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gifu-nct.ac.jp
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let userpass = ""//パスワードをここに入力してください

    $('#password').val(userpass);
})();
