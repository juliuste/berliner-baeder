# berliner-baeder

Berlin public swimming pools operated by [Berliner Bäder-Betriebe](https://www.berlinerbaeder.de/).

[![npm version](https://img.shields.io/npm/v/berliner-baeder.svg)](https://www.npmjs.com/package/berliner-baeder)
[![Build Status](https://travis-ci.org/juliuste/berliner-baeder.svg?branch=master)](https://travis-ci.org/juliuste/berliner-baeder)
[![Greenkeeper badge](https://badges.greenkeeper.io/juliuste/berliner-baeder.svg)](https://greenkeeper.io/)
[![dependency status](https://img.shields.io/david/juliuste/berliner-baeder.svg)](https://david-dm.org/juliuste/berliner-baeder)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/berliner-baeder.svg)](https://david-dm.org/juliuste/berliner-baeder#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/berliner-baeder.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

## Installation

```shell
npm install --save berliner-baeder
```

## Usage

```js
const swimmingPools = require('berliner-baeder')

swimmingPools().then(console.log)
```

Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/promise) that will resolve in a list of objects which looks as follows:

```js
[
    {
        "id": 8,
        "name": "Kombibad Seestraße - Sommerbad",
        "closed": true,
        "street": "Seestraße 80",
        "zip": "13347",
        "city": "Berlin - Wedding",
        "phone": "+49 (30) 45 50 82 24",
        "district": 5,
        "geo": {
            "latitude": 52.557234,
            "longitude": 13.363945
        },
        "tags": [],
        "types": [ // todo
            2
        ],
        "waterTemp": 27,
        "equipment": {
            "primary": [ // todo
                2,
                8,
                7,
                9,
                10,
                14
            ],
            "wellness": [],
            "disability": []
        },
        "areas": [
            {
                "id": 252,
                "description": "Badebereich",
                "article": "",
                "type": 1,
                "hours": [
                    {
                        "weekday": 1,
                        "open": 36000,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 2,
                        "open": 28800,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 3,
                        "open": 28800,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 4,
                        "open": 28800,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 5,
                        "open": 28800,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 6,
                        "open": 28800,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 7,
                        "open": 28800,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    }
                ],
                "special_hours": [],
                "audiences": []
            }
        ]
    },
    // …
    {
        "id": 58,
        "name": "Kombibad Seestraße - Halle",
        "closed": false,
        "street": "Seestraße 80",
        "zip": "13347",
        "city": "Berlin - Wedding",
        "phone": "+49 (30) 45 50 82 0",
        "district": 5,
        "geo": {
            "latitude": 52.557234,
            "longitude": 13.363945
        },
        "tags": [],
        "types": [
            1
        ],
        "waterTemp": 27,
        "equipment": {
            "primary": [
                2,
                8,
                43,
                45,
                47
            ],
            "wellness": [],
            "disability": [
                16,
                17,
                19,
                18,
                22,
                20,
                21
            ]
        },
        "areas": [
            {
                "id": 305,
                "description": "Badebereich",
                "article": "",
                "type": 1,
                "hours": [
                    {
                        "weekday": 2,
                        "open": 23400,
                        "close": 28800,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 3,
                        "open": 23400,
                        "close": 28800,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 4,
                        "open": 23400,
                        "close": 36000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 5,
                        "open": 23400,
                        "close": 28800,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 7,
                        "open": 36000,
                        "close": 57600,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 1,
                        "open": 43200,
                        "close": 57600,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 2,
                        "open": 54000,
                        "close": 79200,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 3,
                        "open": 28800,
                        "close": 79200,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 4,
                        "open": 50400,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 6,
                        "open": 32400,
                        "close": 54000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 1,
                        "open": 57600,
                        "close": 79200,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 2,
                        "open": 28800,
                        "close": 54000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 4,
                        "open": 72000,
                        "close": 79200,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 5,
                        "open": 28800,
                        "close": 79200,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 6,
                        "open": 54000,
                        "close": 75600,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 7,
                        "open": 61200,
                        "close": 68400,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 4,
                        "open": 36000,
                        "close": 50400,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    }
                ],
                "special_hours": [
                    {
                        "description": "23.10.-29.10.2017",
                        "start_date": 1508709600,
                        "end_date": 1509228000,
                        "hours": [
                            {
                                "weekday": 1,
                                "open": 43200,
                                "close": 57600,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 2,
                                "open": 23400,
                                "close": 28800,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 3,
                                "open": 23400,
                                "close": 50400,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 4,
                                "open": 23400,
                                "close": 36000,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 5,
                                "open": 23400,
                                "close": 28800,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 7,
                                "open": 36000,
                                "close": 57600,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 2,
                                "open": 50400,
                                "close": 79200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 3,
                                "open": 50400,
                                "close": 79200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 4,
                                "open": 50400,
                                "close": 72000,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 6,
                                "open": 32400,
                                "close": 54000,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 1,
                                "open": 57600,
                                "close": 79200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 4,
                                "open": 72000,
                                "close": 79200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 5,
                                "open": 54000,
                                "close": 79200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 6,
                                "open": 57600,
                                "close": 75600,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 7,
                                "open": 57600,
                                "close": 68400,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 4,
                                "open": 36000,
                                "close": 50400,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            }
                        ]
                    }
                ],
                "audiences": []
            },
            {
                "id": 374,
                "description": "Therapiebereich",
                "article": "",
                "type": 1,
                "hours": [
                    {
                        "weekday": 1,
                        "open": 43200,
                        "close": 46800,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 1,
                        "open": 61200,
                        "close": 75600,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 2,
                        "open": 61200,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 3,
                        "open": 61200,
                        "close": 75600,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 4,
                        "open": 48600,
                        "close": 52200,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 4,
                        "open": 63000,
                        "close": 75600,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 5,
                        "open": 63000,
                        "close": 75600,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 6,
                        "open": 32400,
                        "close": 46800,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 7,
                        "open": 37800,
                        "close": 46800,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    }
                ],
                "special_hours": [
                    {
                        "description": "23.10.-29.10.2017",
                        "start_date": 1508709600,
                        "end_date": 1509228000,
                        "hours": [
                            {
                                "weekday": 1,
                                "open": 43200,
                                "close": 46800,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 1,
                                "open": 61200,
                                "close": 75600,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 2,
                                "open": 61200,
                                "close": 72000,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 3,
                                "open": 61200,
                                "close": 75600,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 4,
                                "open": 48600,
                                "close": 52200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 4,
                                "open": 63000,
                                "close": 75600,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 5,
                                "open": 63000,
                                "close": 75600,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 6,
                                "open": 32400,
                                "close": 46800,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 7,
                                "open": 37800,
                                "close": 46800,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 1,
                                "open": 46800,
                                "close": 61200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 2,
                                "open": 28800,
                                "close": 61200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 2,
                                "open": 72000,
                                "close": 79200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 3,
                                "open": 25200,
                                "close": 61200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 4,
                                "open": 25200,
                                "close": 46800,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 4,
                                "open": 54000,
                                "close": 61200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 5,
                                "open": 25200,
                                "close": 61200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 6,
                                "open": 46800,
                                "close": 61200,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 7,
                                "open": 30600,
                                "close": 36000,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            },
                            {
                                "weekday": 7,
                                "open": 46800,
                                "close": 64800,
                                "public": true,
                                "audiences": [],
                                "utilizations": []
                            }
                        ]
                    }
                ],
                "audiences": []
            },
            {
                "id": 377,
                "description": "Gastro",
                "article": "",
                "type": 2,
                "hours": [
                    {
                        "weekday": 1,
                        "open": 50400,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 2,
                        "open": 50400,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 3,
                        "open": 32400,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 4,
                        "open": 32400,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 5,
                        "open": 50400,
                        "close": 72000,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 6,
                        "open": 32400,
                        "close": 57600,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    },
                    {
                        "weekday": 7,
                        "open": 32400,
                        "close": 57600,
                        "public": true,
                        "audiences": [],
                        "utilizations": []
                    }
                ],
                "special_hours": [],
                "audiences": []
            }
        ]
    }
    // …
]
```

## Contributing

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/berliner-baeder/issues).
