'use strict';

function Post(data){
    this.data = data;
    return this;
}

function Profile(data){
    this.data = data;
    return this;
}

function Activity(data){
    this.data = data;
    return this;
}

function Dataset(data){
    this.data = data;
    return this;
}

module.exports = {Post, Profile, Activity, Dataset};