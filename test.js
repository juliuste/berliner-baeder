'use strict'

const tape = require('tape')
const baeder = require('./index')

// todo: improve tests
tape('berliner-baeder', (t) => {
	baeder().then((b) => {
		t.plan(2)
		t.ok(b.length > 10, 'baeder length')
		const seestrasse = b.find((x) => x.id === 58)
		t.ok(seestrasse.zip === '13347', 'baeder seestraße zip')
	})
})
