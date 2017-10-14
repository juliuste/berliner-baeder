'use strict'

const {fetch} = require('fetch-ponyfill')({Promise: require('pinkie-promise')})
const omit = require('lodash.omit')

const transformBad = (b) => Object.assign({id: b._id}, omit(b, ['_id']))

const baeder = () =>
    fetch('https://www.berlinerbaeder.de/typo3conf/ext/facilityfilter/Resources/Public/facilities.json')
    .then((res) => res.json())
    .then((res) => res.map(transformBad))

module.exports = baeder
