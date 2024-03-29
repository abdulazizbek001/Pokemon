const pokemons = [
    {
        id: 1,
        num: "001",
        name: "Bulbasaur",
        img: "http://www.serebii.net/pokemongo/pokemon/001.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Grass",
            "Poison"
        ],
        height: "0.71 m",
        weight: "6.9 kg",
        candy: "Bulbasaur Candy",
        candy_count: 25,
        egg: "2 km",
        spawn_chance: 0.69,
        avg_spawns: 69,
        spawn_time: "20:00",
        // link: ''
        multipliers: [
            1.58
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        next_evolution: [
            {
                num: "002",
                name: "Ivysaur"
            },
            {
                num: "003",
                name: "Venusaur"
            }
        ]
    },
    {
        id: 2,
        num: "002",
        name: "Ivysaur",
        img: "http://www.serebii.net/pokemongo/pokemon/002.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Grass",
            "Poison"
        ],
        height: "0.99 m",
        weight: "13.0 kg",
        candy: "Bulbasaur Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.042,
        avg_spawns: 4.2,
        spawn_time: "07:00",
        multipliers: [
            1.2,
            1.6
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "001",
                name: "Bulbasaur"
            }
        ],
        next_evolution: [
            {
                num: "003",
                name: "Venusaur"
            }
        ]
    },
    {
        id: 3,
        num: "003",
        name: "Venusaur",
        img: "http://www.serebii.net/pokemongo/pokemon/003.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Grass",
            "Poison"
        ],
        height: "2.01 m",
        weight: "100.0 kg",
        candy: "Bulbasaur Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.017,
        avg_spawn: 1.7,
        spawn_time: "1:30",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Ice",
            "Flyig",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "001",
                name: "Bulbasaur"
            },
            {
                num: "002",
                name: "Ivysaur"
            }
        ]
    },
    {
        id: 4,
        num: "004",
        name: "Charmander",
        img: "http://www.serebii.net/pokemongo/pokemon/004.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fire"
        ],
        height: "0.61 m",
        weight: "8.5 kg",
        candy: "Charmander Candy",
        candy_count: 25,
        egg: "2 km",
        spawn_chance: 0.253,
        avg_spawns: 25.3,
        spawn_time: "08:45",
        multipliers: [
            1.65
        ],
        weaknesses: [
            "Water",
            "Ground",
            "Rock"
        ],
        next_evolution: [
            {
                num: "005",
                name: "Charmeleon"
            },
            {
                num: "006",
                name: "Charizard"
            }
        ]
    },
    {
        id: 5,
        num: "005",
        name: "Charmeleon",
        img: "http://www.serebii.net/pokemongo/pokemon/005.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fire"
        ],
        height: "1.09 m",
        weight: "19.0 kg",
        candy: "Charmander Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.012,
        avg_spawns: 1.2,
        spawn_time: "19:00",
        multipliers: [
            1.79
        ],
        weaknesses: [
            "Water",
            "Ground",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "004",
                name: "Charmander"
            }
        ],
        next_evolution: [
            {
                num: "006",
                name: "Charizard"
            }
        ]
    },
    {
        id: 6,
        num: "006",
        name: "Charizard",
        img: "http://www.serebii.net/pokemongo/pokemon/006.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fire",
            "Flying"
        ],
        height: "1.70 m",
        weight: "90.5 kg",
        candy: "Charmander Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0031,
        avg_spawns: 0.31,
        spawn_time: "1:34",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Electric",
            "Rck"
        ],
        prev_evolution: [
            {
                num: "004",
                name: "Charmander"
            },
            {
                num: "005",
                name: "Charmeleon"
            }
        ]
    },
    {
        id: 7,
        num: "007",
        name: "Squirtle",
        img: "http://www.serebii.net/pokemongo/pokemon/007.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "0.51 m",
        weight: "9.0 kg",
        candy: "Squirtle Candy",
        candy_count: 25,
        egg: "2 km",
        spawn_chance: 0.58,
        avg_spawns: 58,
        spawn_time: "04:25",
        multipliers: [
            2.1
        ],
        weaknesses: [
            "Electric",
            "Grass"
        ],
        next_evolution: [
            {
                num: "008",
                name: "Wartortle"
            },
            {
                num: "009",
                name: "Blastoise"
            }
        ]
    },
    {
        id: 8,
        num: "008",
        name: "Wartortle",
        img: "http://www.serebii.net/pokemongo/pokemon/008.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "0.99 m",
        weight: "22.5 kg",
        candy: "Squirtle Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.034,
        avg_spawns: 3.4,
        spawn_time: "07:02",
        multipliers: [
            1.4
        ],
        weaknesses: [
            "Electric",
            "Grass"
        ],
        prev_evolution: [
            {
                num: "007",
                name: "Squirtle"
            }
        ],
        next_evolution: [
            {
                num: "009",
                name: "Blastoise"
            }
        ]
    },
    {
        id: 9,
        num: "009",
        name: "Blastoise",
        img: "http://www.serebii.net/pokemongo/pokemon/009.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "1.60 m",
        weight: "85.5 kg",
        candy: "Squirtle Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0067,
        avg_spawns: 0.67,
        spawn_time: "0:06",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass"
        ],
        prev_evolution: [
            {
                num: "007",
                name: "Squirtle"
            },
            {
                num: "008",
                name: "Wartortle"
            }
        ]
    },
    {
        id: 10,
        num: "010",
        name: "Caterpie",
        img: "http://www.serebii.net/pokemongo/pokemon/010.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Bug"
        ],
        height: "0.30 m",
        weight: "2.9 kg",
        candy: "Caterpie Candy",
        candy_count: 12,
        egg: "2 km",
        spawn_chance: 3.032,
        avg_spawns: "03.2",
        spawn_time: "16:35",
        multipliers: [
            1.05
        ],
        weaknesses: [
            "Fire",
            "Flying",
            "Rock"
        ],
        next_evolution: [
            {
                num: "011",
                name: "Metapod"
            },
            {
                num: "012",
                name: "Butterfree"
            }
        ]
    },
    {
        id: 11,
        num: "011",
        name: "Metapod",
        img: "http://www.serebii.net/pokemongo/pokemon/011.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Bug"
        ],
        height: "0.71 m",
        weight: "9.9 kg",
        candy: "Caterpie Candy",
        candy_count: 50,
        egg: "Notin Eggs",
        spawn_chance: 0.187,
        avg_spawns: 18.7,
        spawn_time: "02:11",
        multipliers: [
            3.55,
            3.79
        ],
        weaknesses: [
            "Fire",
            "Flying",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "010",
                name: "Caterpie"
            }
        ],
        next_evolution: [
            {
                num: "012",
                name: "Butterfree"
            }
        ]
    },
    {
        id: 12,
        num: "012",
        name: "Butterfree",
        img: "http://www.serebii.net/pokemongo/pokemon/012.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Bug",
            "Flying"
        ],
        height: "1.09 m",
        weight: "32.0 kg",
        candy: "Caterpie Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.022,
        avg_spawn: 2.2,
        spawn_time: "0: 23",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Electric",
            "Ie",
            "Flying",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "010",
                name: "Caterpie"
            },
            {
                num: "011",
                name: "Metapod"
            }
        ]
    },
    {
        id: 13,
        num: "013",
        name: "Weedle",
        img: "http://www.serebii.net/pokemongo/pokemon/013.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Bug",
            "Poison"
        ],
        height: "0.30 m",
        weight: "3.2 kg",
        candy: "Weedle Candy",
        candy_count: 12,
        egg: "2 km",
        spawn_chance: 7.12,
        avg_spawns: 712,
        spawn_time: "02:21",
        multipliers: [
            1.01,
            1.09
        ],
        weaknesses: [
            "Fire",
            "Flying",
            "Psychic",
            "Rock"
        ],
        next_evolution: [
            {
                num: "014",
                name: "Kakuna"
            },
            {
                num: "015",
                name: "Beedrill"
            }
        ]
    },
    {
        id: 14,
        num: "014",
        name: "Kakuna",
        img: "http://www.serebii.net/pokemongo/pokemon/014.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Bug",
            "Poison"
        ],
        height: "0.61 m",
        weight: "10.0 kg",
        candy: "Weedle Candy",
        candy_count: 50,
        egg: "Notin Eggs",
        spawn_chance: 0.44,
        avg_spawns: 44,
        spawn_time: "02:30",
        multipliers: [
            3.01,
            3.41
        ],
        weaknesses: [
            "Fire",
            "Flying",
            "Psychic",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "013",
                name: "Weedle"
            }
        ],
        next_evolution: [
            {
                num: "015",
                name: "Beedrill"
            }
        ]
    },
    {
        id: 15,
        num: "015",
        name: "Beedrill",
        img: "http://www.serebii.net/pokemongo/pokemon/015.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Bug",
            "Poison"
        ],
        height: "0.99 m",
        weight: "29.5 kg",
        candy: "Weedle Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.051,
        avg_spawn: 5.1,
        spawn_time: "0: 50",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Flying",
            "Psychc",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "013",
                name: "Weedle"
            },
            {
                num: "014",
                name: "Kakuna"
            }
        ]
    },
    {
        id: 16,
        num: "016",
        name: "Pidgey",
        img: "http://www.serebii.net/pokemongo/pokemon/016.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal",
            "Flying"
        ],
        height: "0.30 m",
        weight: "1.8 kg",
        candy: "Pidgey Candy",
        candy_count: 12,
        egg: "2 km",
        spawn_chance: 15.98,
        avg_spawns: .598,
        spawn_time: "01:34",
        multipliers: [
            1.71,
            1.92
        ],
        weaknesses: [
            "Electric",
            "Rock"
        ],
        next_evolution: [
            {
                num: "017",
                name: "Pidgeotto"
            },
            {
                num: "018",
                name: "Pidgeot"
            }
        ]
    },
    {
        id: 17,
        num: "017",
        name: "Pidgeotto",
        img: "http://www.serebii.net/pokemongo/pokemon/017.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal",
            "Flying"
        ],
        height: "1.09 m",
        weight: "30.0 kg",
        candy: "Pidgey Candy",
        candy_count: 50,
        egg: "Notin Eggs",
        spawn_chance: 1.02,
        avg_spawns: 102,
        spawn_time: "01:30",
        multipliers: [
            1.79
        ],
        weaknesses: [
            "Electric",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "016",
                name: "Pidgey"
            }
        ],
        next_evolution: [
            {
                num: "018",
                name: "Pidgeot"
            }
        ]
    },
    {
        id: 18,
        num: "018",
        name: "Pidgeot",
        img: "http://www.serebii.net/pokemongo/pokemon/018.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal",
            "Flying"
        ],
        height: "1.50 m",
        weight: "39.5 kg",
        candy: "Pidgey Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_hane: 0.13,
        avg_spaws: 13,
        spawn_time: "0: 50",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "016",
                name: "Pidgey"
            },
            {
                num: "017",
                name: "Pidgeotto"
            }
        ]
    },
    {
        id: 19,
        num: "019",
        name: "Rattata",
        img: "http://www.serebii.net/pokemongo/pokemon/019.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "0.30 m",
        weight: "3.5 kg",
        candy: "Rattata Candy",
        candy_count: 25,
        egg: "2 km",
        spawn_chance: 13.05,
        avg_spawns: .305,
        spawn_time: "01:55",
        multipliers: [
            2.55,
            2.73
        ],
        weaknesses: [
            "Fighting"
        ],
        next_evolution: [
            {
                num: "020",
                name: "Raticate"
            }
        ]
    },
    {
        id: 20,
        num: "020",
        name: "Raticate",
        img: "http://www.serebii.net/pokemongo/pokemon/020.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "0.71 m",
        weight: "18.5 kg",
        candy: "Rattata Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_hane: 0.41,
        avg_spaws: 41,
        spawn_time: "0: 56",
        multiplirs: null,
        weaknesses: [
            "Fighting"
        ],
        prev_evolution: [
            {
                num: "019",
                name: "Rattata"
            }
        ]
    },
    {
        id: 21,
        num: "021",
        name: "Spearow",
        img: "http://www.serebii.net/pokemongo/pokemon/021.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal",
            "Flying"
        ],
        height: "0.30 m",
        weight: "2.0 kg",
        candy: "Spearow Candy",
        candy_count: 50,
        egg: "2 km",
        spawn_chance: 4.73,
        avg_spawns: 473,
        spawn_time: "12:25",
        multipliers: [
            2.66,
            2.68
        ],
        weaknesses: [
            "Electric",
            "Rock"
        ],
        next_evolution: [
            {
                num: "022",
                name: "Fearow"
            }
        ]
    },
    {
        id: 22,
        num: "022",
        name: "Fearow",
        img: "http://www.serebii.net/pokemongo/pokemon/022.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal",
            "Flying"
        ],
        height: "1.19 m",
        weight: "38.0 kg",
        candy: "Spearow Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_hane: 0.15,
        avg_spaws: 15,
        spawn_time: "0: 11",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "021",
                name: "Spearow"
            }
        ]
    },
    {
        id: 23,
        num: "023",
        name: "Ekans",
        img: "http://www.serebii.net/pokemongo/pokemon/023.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison"
        ],
        height: "2.01 m",
        weight: "6.9 kg",
        candy: "Ekans Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 2.27,
        avg_spawns: 227,
        spawn_time: "12:20",
        multipliers: [
            2.21,
            2.27
        ],
        weaknesses: [
            "Ground",
            "Psychic"
        ],
        next_evolution: [
            {
                num: "024",
                name: "Arbok"
            }
        ]
    },
    {
        id: 24,
        num: "024",
        name: "Arbok",
        img: "http://www.serebii.net/pokemongo/pokemon/024.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison"
        ],
        height: "3.51 m",
        weight: "65.0 kg",
        candy: "Ekans Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.072,
        avg_spawn: 7.2,
        spawn_time: "0: 50",
        multiplirs: null,
        weaknesses: [
            "Ground",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "023",
                name: "Ekans"
            }
        ]
    },
    {
        id: 25,
        num: "025",
        name: "Pikachu",
        img: "http://www.serebii.net/pokemongo/pokemon/025.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Electric"
        ],
        height: "0.41 m",
        weight: "6.0 kg",
        candy: "Pikachu Candy",
        candy_count: 50,
        egg: "2 km",
        spawn_chance: 0.21,
        avg_spawns: 21,
        spawn_time: "04:00",
        multipliers: [
            2.34
        ],
        weaknesses: [
            "Ground"
        ],
        next_evolution: [
            {
                num: "026",
                name: "Raichu"
            }
        ]
    },
    {
        id: 26,
        num: "026",
        name: "Raichu",
        img: "http://www.serebii.net/pokemongo/pokemon/026.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Electric"
        ],
        height: "0.79 m",
        weight: "30.0 kg",
        candy: "Pikachu Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0076,
        avg_spawns: 0.76,
        spawn_time: "2: 58",
        multiplirs: null,
        weaknesses: [
            "Ground"
        ],
        prev_evolution: [
            {
                num: "025",
                name: "Pikachu"
            }
        ]
    },
    {
        id: 27,
        num: "027",
        name: "Sandshrew",
        img: "http://www.serebii.net/pokemongo/pokemon/027.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ground"
        ],
        height: "0.61 m",
        weight: "12.0 kg",
        candy: "Sandshrew Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 1.11,
        avg_spawns: 111,
        spawn_time: "01:58",
        multipliers: [
            2.45
        ],
        weaknesses: [
            "Water",
            "Grass",
            "Ice"
        ],
        next_evolution: [
            {
                num: "028",
                name: "Sandslash"
            }
        ]
    },
    {
        id: 28,
        num: "028",
        name: "Sandslash",
        img: "http://www.serebii.net/pokemongo/pokemon/028.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ground"
        ],
        height: "0.99 m",
        weight: "29.5 kg",
        candy: "Sandshrew Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.037,
        avg_spawn: 3.7,
        spawn_time: "1: 34",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Grass",
            "ce"
        ],
        prev_evolution: [
            {
                num: "027",
                name: "Sandshrew"
            }
        ]
    },
    {
        id: 29,
        num: "029",
        name: "Nidoran ♀ (Female)",
        img: "http://www.serebii.net/pokemongo/pokemon/029.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison"
        ],
        height: "0.41 m",
        weight: "7.0 kg",
        candy: "Nidoran ♀ (Female) Candy",
        candy_count: 25,
        egg: "5 km",
        spawn_chance: 1.38,
        avg_spawns: 138,
        spawn_time: "01:51",
        multipliers: [
            1.63,
            2.48
        ],
        weaknesses: [
            "Ground",
            "Psychic"
        ],
        next_evolution: [
            {
                num: "030",
                name: "Nidorina"
            },
            {
                num: "031",
                name: "Nidoqueen"
            }
        ]
    },
    {
        id: 30,
        num: "030",
        name: "Nidorina",
        img: "http://www.serebii.net/pokemongo/pokemon/030.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison"
        ],
        height: "0.79 m",
        weight: "20.0 kg",
        candy: "Nidoran ♀ (Female) Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.088,
        avg_spawns: 8.8,
        spawn_time: "07:22",
        multipliers: [
            1.83,
            2.48
        ],
        weaknesses: [
            "Ground",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "029",
                name: "Nidoran(Female)"
            }
        ],
        next_evolution: [
            {
                num: "031",
                name: "Nidoqueen"
            }
        ]
    },
    {
        id: 31,
        num: "031",
        name: "Nidoqueen",
        img: "http://www.serebii.net/pokemongo/pokemon/031.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison",
            "Ground"
        ],
        height: "1.30 m",
        weight: "60.0 kg",
        candy: "Nidoran ♀ (Female) Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.012,
        avg_spawn: 1.2,
        spawn_time: "1: 35",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Ice",
            "Groud",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "029",
                name: "Nidoran(Female)"
            },
            {
                num: "030",
                name: "Nidorina"
            }
        ]
    },
    {
        id: 32,
        num: "032",
        name: "Nidoran ♂ (Male)",
        img: "http://www.serebii.net/pokemongo/pokemon/032.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison"
        ],
        height: "0.51 m",
        weight: "9.0 kg",
        candy: "Nidoran ♂ (Male) Candy",
        candy_count: 25,
        egg: "5 km",
        spawn_chance: 1.31,
        avg_spawns: 131,
        spawn_time: "01:12",
        multipliers: [
            1.64,
            1.7
        ],
        weaknesses: [
            "Ground",
            "Psychic"
        ],
        next_evolution: [
            {
                num: "033",
                name: "Nidorino"
            },
            {
                num: "034",
                name: "Nidoking"
            }
        ]
    },
    {
        id: 33,
        num: "033",
        name: "Nidorino",
        img: "http://www.serebii.net/pokemongo/pokemon/033.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison"
        ],
        height: "0.89 m",
        weight: "19.5 kg",
        candy: "Nidoran ♂ (Male) Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.083,
        avg_spawns: 8.3,
        spawn_time: "09:02",
        multipliers: [
            1.83
        ],
        weaknesses: [
            "Ground",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "032",
                name: "Nidoran(Male)"
            }
        ],
        next_evolution: [
            {
                num: "034",
                name: "Nidoking"
            }
        ]
    },
    {
        id: 34,
        num: "034",
        name: "Nidoking",
        img: "http://www.serebii.net/pokemongo/pokemon/034.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison",
            "Ground"
        ],
        height: "1.40 m",
        weight: "62.0 kg",
        candy: "Nidoran ♂ (Male) Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.017,
        avg_spawn: 1.7,
        spawn_time: "1: 16",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Ice",
            "Groud",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "032",
                name: "Nidoran(Male)"
            },
            {
                num: "033",
                name: "Nidorino"
            }
        ]
    },
    {
        id: 35,
        num: "035",
        name: "Clefairy",
        img: "http://www.serebii.net/pokemongo/pokemon/035.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "0.61 m",
        weight: "7.5 kg",
        candy: "Clefairy Candy",
        candy_count: 50,
        egg: "2 km",
        spawn_chance: 0.92,
        avg_spawns: 92,
        spawn_time: "03:30",
        multipliers: [
            2.03,
            2.14
        ],
        weaknesses: [
            "Fighting"
        ],
        next_evolution: [
            {
                num: "036",
                name: "Clefable"
            }
        ]
    },
    {
        id: 36,
        num: "036",
        name: "Clefable",
        img: "http://www.serebii.net/pokemongo/pokemon/036.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "1.30 m",
        weight: "40.0 kg",
        candy: "Clefairy Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.012,
        avg_spawn: 1.2,
        spawn_time: "0: 29",
        multiplirs: null,
        weaknesses: [
            "Fighting"
        ],
        prev_evolution: [
            {
                num: "035",
                name: "Clefairy"
            }
        ]
    },
    {
        id: 37,
        num: "037",
        name: "Vulpix",
        img: "http://www.serebii.net/pokemongo/pokemon/037.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fire"
        ],
        height: "0.61 m",
        weight: "9.9 kg",
        candy: "Vulpix Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.22,
        avg_spawns: 22,
        spawn_time: "13:43",
        multipliers: [
            2.74,
            2.81
        ],
        weaknesses: [
            "Water",
            "Ground",
            "Rock"
        ],
        next_evolution: [
            {
                num: "038",
                name: "Ninetales"
            }
        ]
    },
    {
        id: 38,
        num: "038",
        name: "Ninetales",
        img: "http://www.serebii.net/pokemongo/pokemon/038.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fire"
        ],
        height: "1.09 m",
        weight: "19.9 kg",
        candy: "Vulpix Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0077,
        avg_spawns: 0.77,
        spawn_time: "0: 32",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Ground",
            "Rck"
        ],
        prev_evolution: [
            {
                num: "037",
                name: "Vulpix"
            }
        ]
    },
    {
        id: 39,
        num: "039",
        name: "Jigglypuff",
        img: "http://www.serebii.net/pokemongo/pokemon/039.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "0.51 m",
        weight: "5.5 kg",
        candy: "Jigglypuff Candy",
        candy_count: 50,
        egg: "2 km",
        spawn_chance: 0.39,
        avg_spawns: 39,
        spawn_time: "08:46",
        multipliers: [
            1.85
        ],
        weaknesses: [
            "Fighting"
        ],
        next_evolution: [
            {
                num: "040",
                name: "Wigglytuff"
            }
        ]
    },
    {
        id: 40,
        num: "040",
        name: "Wigglytuff",
        img: "http://www.serebii.net/pokemongo/pokemon/040.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "0.99 m",
        weight: "12.0 kg",
        candy: "Jigglypuff Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.018,
        avg_spawn: 1.8,
        spawn_time: "1: 28",
        multiplirs: null,
        weaknesses: [
            "Fighting"
        ],
        prev_evolution: [
            {
                num: "039",
                name: "Jigglypuff"
            }
        ]
    },
    {
        id: 41,
        num: "041",
        name: "Zubat",
        img: "http://www.serebii.net/pokemongo/pokemon/041.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison",
            "Flying"
        ],
        height: "0.79 m",
        weight: "7.5 kg",
        candy: "Zubat Candy",
        candy_count: 50,
        egg: "2 km",
        spawn_chance: 6.52,
        avg_spawns: 652,
        spawn_time: "12:28",
        multipliers: [
            2.6,
            3.67
        ],
        weaknesses: [
            "Electric",
            "Ice",
            "Psychic",
            "Rock"
        ],
        next_evolution: [
            {
                num: "042",
                name: "Golbat"
            }
        ]
    },
    {
        id: 42,
        num: "042",
        name: "Golbat",
        img: "http://www.serebii.net/pokemongo/pokemon/042.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison",
            "Flying"
        ],
        height: "1.60 m",
        weight: "55.0 kg",
        candy: "Zubat Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_hane: 0.42,
        avg_spaws: 42,
        spawn_time: "0: 15",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Ice",
            "Psychc",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "041",
                name: "Zubat"
            }
        ]
    },
    {
        id: 43,
        num: "043",
        name: "Oddish",
        img: "http://www.serebii.net/pokemongo/pokemon/043.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Grass",
            "Poison"
        ],
        height: "0.51 m",
        weight: "5.4 kg",
        candy: "Oddish Candy",
        candy_count: 25,
        egg: "5 km",
        spawn_chance: 1.02,
        avg_spawns: 102,
        spawn_time: "03:58",
        multipliers: [
            1.5
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        next_evolution: [
            {
                num: "044",
                name: "Gloom"
            },
            {
                num: "045",
                name: "Vileplume"
            }
        ]
    },
    {
        id: 44,
        num: "044",
        name: "Gloom",
        img: "http://www.serebii.net/pokemongo/pokemon/044.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Grass",
            "Poison"
        ],
        height: "0.79 m",
        weight: "8.6 kg",
        candy: "Oddish Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.064,
        avg_spawns: 6.4,
        spawn_time: "11:33",
        multipliers: [
            1.49
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "043",
                name: "Oddish"
            }
        ],
        next_evolution: [
            {
                num: "045",
                name: "Vileplume"
            }
        ]
    },
    {
        id: 45,
        num: "045",
        name: "Vileplume",
        img: "http://www.serebii.net/pokemongo/pokemon/045.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Grass",
            "Poison"
        ],
        height: "1.19 m",
        weight: "18.6 kg",
        candy: "Oddish Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0097,
        avg_spawns: 0.97,
        spawn_time: "2: 58",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Ice",
            "Flyig",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "043",
                name: "Oddish"
            },
            {
                num: "044",
                name: "Gloom"
            }
        ]
    },
    {
        id: 46,
        num: "046",
        name: "Paras",
        img: "http://www.serebii.net/pokemongo/pokemon/046.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Bug",
            "Grass"
        ],
        height: "0.30 m",
        weight: "5.4 kg",
        candy: "Paras Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 2.36,
        avg_spawns: 236,
        spawn_time: "01:42",
        multipliers: [
            2.02
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Poison",
            "Flying",
            "Bug",
            "Rock"
        ],
        next_evolution: [
            {
                num: "047",
                name: "Parasect"
            }
        ]
    },
    {
        id: 47,
        num: "047",
        name: "Parasect",
        img: "http://www.serebii.net/pokemongo/pokemon/047.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Bug",
            "Grass"
        ],
        height: "0.99 m",
        weight: "29.5 kg",
        candy: "Paras Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.074,
        avg_spawn: 7.4,
        spawn_time: "0: 22",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Ice",
            "Poisn",
            "Flying",
            "Bug",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "046",
                name: "Paras"
            }
        ]
    },
    {
        id: 48,
        num: "048",
        name: "Venonat",
        img: "http://www.serebii.net/pokemongo/pokemon/048.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Bug",
            "Poison"
        ],
        height: "0.99 m",
        weight: "30.0 kg",
        candy: "Venonat Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 2.28,
        avg_spawns: 228,
        spawn_time: "02:31",
        multipliers: [
            1.86,
            1.9
        ],
        weaknesses: [
            "Fire",
            "Flying",
            "Psychic",
            "Rock"
        ],
        next_evolution: [
            {
                num: "049",
                name: "Venomoth"
            }
        ]
    },
    {
        id: 49,
        num: "049",
        name: "Venomoth",
        img: "http://www.serebii.net/pokemongo/pokemon/049.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Bug",
            "Poison"
        ],
        height: "1.50 m",
        weight: "12.5 kg",
        candy: "Venonat Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.072,
        avg_spawn: 7.2,
        spawn_time: "2: 40",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Flying",
            "Psychc",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "048",
                name: "Venonat"
            }
        ]
    },
    {
        id: 50,
        num: "050",
        name: "Diglett",
        img: "http://www.serebii.net/pokemongo/pokemon/050.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ground"
        ],
        height: "0.20 m",
        weight: "0.8 kg",
        candy: "Diglett Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chanc: 0.4,
        avg_spawns: 40,
        spawn_time: "02:22",
        multipliers: [
            2.69
        ],
        weaknesses: [
            "Water",
            "Grass",
            "Ice"
        ],
        next_evolution: [
            {
                num: "051",
                name: "Dugtrio"
            }
        ]
    },
    {
        id: 51,
        num: "051",
        name: "Dugtrio",
        img: "http://www.serebii.net/pokemongo/pokemon/051.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ground"
        ],
        height: "0.71 m",
        weight: "33.3 kg",
        candy: "Dugtrio",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.014,
        avg_spawn: 1.4,
        spawn_time: "1: 37",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Grass",
            "ce"
        ],
        prev_evolution: [
            {
                num: "050",
                name: "Diglett"
            }
        ]
    },
    {
        id: 52,
        num: "052",
        name: "Meowth",
        img: "http://www.serebii.net/pokemongo/pokemon/052.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "0.41 m",
        weight: "4.2 kg",
        candy: "Meowth Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.86,
        avg_spawns: 86,
        spawn_time: "02:54",
        multipliers: [
            1.98
        ],
        weaknesses: [
            "Fighting"
        ],
        next_evolution: [
            {
                num: "053",
                name: "Persian"
            }
        ]
    },
    {
        id: 53,
        num: "053",
        name: "Persian",
        img: "http://www.serebii.net/pokemongo/pokemon/053.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "0.99 m",
        weight: "32.0 kg",
        candy: "Meowth Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.022,
        avg_spawn: 2.2,
        spawn_time: "0: 44",
        multiplirs: null,
        weaknesses: [
            "Fighting"
        ],
        prev_evolution: [
            {
                num: "052",
                name: "Meowth"
            }
        ]
    },
    {
        id: 54,
        num: "054",
        name: "Psyduck",
        img: "http://www.serebii.net/pokemongo/pokemon/054.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "0.79 m",
        weight: "19.6 kg",
        candy: "Psyduck Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 2.54,
        avg_spawns: 254,
        spawn_time: "03:41",
        multipliers: [
            2.27
        ],
        weaknesses: [
            "Electric",
            "Grass"
        ],
        next_evolution: [
            {
                num: "055",
                name: "Golduck"
            }
        ]
    },
    {
        id: 55,
        num: "055",
        name: "Golduck",
        img: "http://www.serebii.net/pokemongo/pokemon/055.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "1.70 m",
        weight: "76.6 kg",
        candy: "Psyduck Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.087,
        avg_spawn: 8.7,
        spawn_time: "2:06",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass"
        ],
        prev_evolution: [
            {
                num: "054",
                name: "Psyduck"
            }
        ]
    },
    {
        id: 56,
        num: "056",
        name: "Mankey",
        img: "http://www.serebii.net/pokemongo/pokemon/056.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fighting"
        ],
        height: "0.51 m",
        weight: "28.0 kg",
        candy: "Mankey Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.92,
        avg_spawns: 92,
        spawn_time: "12:52",
        multipliers: [
            2.17,
            2.28
        ],
        weaknesses: [
            "Flying",
            "Psychic",
            "Fairy"
        ],
        next_evolution: [
            {
                num: "057",
                name: "Primeape"
            }
        ]
    },
    {
        id: 57,
        num: "057",
        name: "Primeape",
        img: "http://www.serebii.net/pokemongo/pokemon/057.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fighting"
        ],
        height: "0.99 m",
        weight: "32.0 kg",
        candy: "Mankey Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.031,
        avg_spawn: 3.1,
        spawn_time: "1: 33",
        multiplirs: null,
        weaknesses: [
            "Flying",
            "Psychic",
            "Fary"
        ],
        prev_evolution: [
            {
                num: "056",
                name: "Mankey"
            }
        ]
    },
    {
        id: 58,
        num: "058",
        name: "Growlithe",
        img: "http://www.serebii.net/pokemongo/pokemon/058.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fire"
        ],
        height: "0.71 m",
        weight: "19.0 kg",
        candy: "Growlithe Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.92,
        avg_spawns: 92,
        spawn_time: "03:57",
        multipliers: [
            2.31,
            2.36
        ],
        weaknesses: [
            "Water",
            "Ground",
            "Rock"
        ],
        next_evolution: [
            {
                num: "059",
                name: "Arcanine"
            }
        ]
    },
    {
        id: 59,
        num: "059",
        name: "Arcanine",
        img: "http://www.serebii.net/pokemongo/pokemon/059.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fire"
        ],
        height: "1.91 m",
        weight: "155.0 kg",
        candy: "Growlithe Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.017,
        avg_spawn: 1.7,
        spawn_time: "0: 11",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Ground",
            "Rck"
        ],
        prev_evolution: [
            {
                num: "058",
                name: "Growlithe"
            }
        ]
    },
    {
        id: 60,
        num: "060",
        name: "Poliwag",
        img: "http://www.serebii.net/pokemongo/pokemon/060.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "0.61 m",
        weight: "12.4 kg",
        candy: "Poliwag Candy",
        candy_count: 25,
        egg: "5 km",
        spawn_chance: 2.19,
        avg_spawns: 219,
        spawn_time: "03:40",
        multipliers: [
            1.72,
            1.73
        ],
        weaknesses: [
            "Electric",
            "Grass"
        ],
        next_evolution: [
            {
                num: "061",
                name: "Poliwhirl"
            },
            {
                num: "062",
                name: "Poliwrath"
            }
        ]
    },
    {
        id: 61,
        num: "061",
        name: "Poliwhirl",
        img: "http://www.serebii.net/pokemongo/pokemon/061.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "0.99 m",
        weight: "20.0 kg",
        candy: "Poliwag Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.13,
        avg_spawns: 13,
        spawn_time: "09:14",
        multipliers: [
            1.95
        ],
        weaknesses: [
            "Electric",
            "Grass"
        ],
        prev_evolution: [
            {
                num: "060",
                name: "Poliwag"
            }
        ],
        next_evolution: [
            {
                num: "062",
                name: "Poliwrath"
            }
        ]
    },
    {
        id: 62,
        num: "062",
        name: "Poliwrath",
        img: "http://www.serebii.net/pokemongo/pokemon/062.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water",
            "Fighting"
        ],
        height: "1.30 m",
        weight: "54.0 kg",
        candy: "Poliwag Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.011,
        avg_spawn: 1.1,
        spawn_time: "0: 32",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass",
            "Flyig",
            "Psychic",
            "Fairy"
        ],
        prev_evolution: [
            {
                num: "060",
                name: "Poliwag"
            },
            {
                num: "061",
                name: "Poliwhirl"
            }
        ]
    },
    {
        id: 63,
        num: "063",
        name: "Abra",
        img: "http://www.serebii.net/pokemongo/pokemon/063.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Psychic"
        ],
        height: "0.89 m",
        weight: "19.5 kg",
        candy: "Abra Candy",
        candy_count: 25,
        egg: "5 km",
        spawn_chance: 0.42,
        avg_spawns: 42,
        spawn_time: "04:30",
        multipliers: [
            1.36,
            1.95
        ],
        weaknesses: [
            "Bug",
            "Ghost",
            "Dark"
        ],
        next_evolution: [
            {
                num: "064",
                name: "Kadabra"
            },
            {
                num: "065",
                name: "Alakazam"
            }
        ]
    },
    {
        id: 64,
        num: "064",
        name: "Kadabra",
        img: "http://www.serebii.net/pokemongo/pokemon/064.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Psychic"
        ],
        height: "1.30 m",
        weight: "56.5 kg",
        candy: "Abra Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.027,
        avg_spawns: 2.7,
        spawn_time: "11:25",
        multipliers: [
            1.4
        ],
        weaknesses: [
            "Bug",
            "Ghost",
            "Dark"
        ],
        prev_evolution: [
            {
                num: "063",
                name: "Abra"
            }
        ],
        next_evolution: [
            {
                num: "065",
                name: "Alakazam"
            }
        ]
    },
    {
        id: 65,
        num: "065",
        name: "Alakazam",
        img: "http://www.serebii.net/pokemongo/pokemon/065.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Psychic"
        ],
        height: "1.50 m",
        weight: "48.0 kg",
        candy: "Abra Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0073,
        avg_spawns: 0.73,
        spawn_time: "1: 33",
        multiplirs: null,
        weaknesses: [
            "Bug",
            "Ghost",
            "Drk"
        ],
        prev_evolution: [
            {
                num: "063",
                name: "Abra"
            },
            {
                num: "064",
                name: "Kadabra"
            }
        ]
    },
    {
        id: 66,
        num: "066",
        name: "Machop",
        img: "http://www.serebii.net/pokemongo/pokemon/066.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fighting"
        ],
        height: "0.79 m",
        weight: "19.5 kg",
        candy: "Machop Candy",
        candy_count: 25,
        egg: "5 km",
        spawn_chance: 0.49,
        avg_spawns: 49,
        spawn_time: "01:55",
        multipliers: [
            1.64,
            1.65
        ],
        weaknesses: [
            "Flying",
            "Psychic",
            "Fairy"
        ],
        next_evolution: [
            {
                num: "067",
                name: "Machoke"
            },
            {
                num: "068",
                name: "Machamp"
            }
        ]
    },
    {
        id: 67,
        num: "067",
        name: "Machoke",
        img: "http://www.serebii.net/pokemongo/pokemon/067.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fighting"
        ],
        height: "1.50 m",
        weight: "70.5 kg",
        candy: "Machop Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.034,
        avg_spawns: 3.4,
        spawn_time: "10:32",
        multipliers: [
            1.7
        ],
        weaknesses: [
            "Flying",
            "Psychic",
            "Fairy"
        ],
        prev_evolution: [
            {
                num: "066",
                name: "Machop"
            }
        ],
        next_evolution: [
            {
                num: "068",
                name: "Machamp"
            }
        ]
    },
    {
        id: 68,
        num: "068",
        name: "Machamp",
        img: "http://www.serebii.net/pokemongo/pokemon/068.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fighting"
        ],
        height: "1.60 m",
        weight: "130.0 kg",
        candy: "Machop Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0068,
        avg_spawns: 0.68,
        spawn_time: "0: 55",
        multiplirs: null,
        weaknesses: [
            "Flying",
            "Psychic",
            "Fary"
        ],
        prev_evolution: [
            {
                num: "066",
                name: "Machop"
            },
            {
                num: "067",
                name: "Machoke"
            }
        ]
    },
    {
        id: 69,
        num: "069",
        name: "Bellsprout",
        img: "http://www.serebii.net/pokemongo/pokemon/069.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Grass",
            "Poison"
        ],
        height: "0.71 m",
        weight: "4.0 kg",
        candy: "Bellsprout Candy",
        candy_count: 25,
        egg: "5 km",
        spawn_chance: 1.15,
        avg_spawns: 115,
        spawn_time: "04:10",
        multipliers: [
            1.57
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        next_evolution: [
            {
                num: "070",
                name: "Weepinbell"
            },
            {
                num: "071",
                name: "Victreebel"
            }
        ]
    },
    {
        id: 70,
        num: "070",
        name: "Weepinbell",
        img: "http://www.serebii.net/pokemongo/pokemon/070.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Grass",
            "Poison"
        ],
        height: "0.99 m",
        weight: "6.4 kg",
        candy: "Bellsprout Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.072,
        avg_spawns: 7.2,
        spawn_time: "09:45",
        multipliers: [
            1.59
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Flying",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "069",
                name: "Bellsprout"
            }
        ],
        next_evolution: [
            {
                num: "071",
                name: "Victreebel"
            }
        ]
    },
    {
        id: 71,
        num: "071",
        name: "Victreebel",
        img: "http://www.serebii.net/pokemongo/pokemon/071.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Grass",
            "Poison"
        ],
        height: "1.70 m",
        weight: "15.5 kg",
        candy: "Bellsprout Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0059,
        avg_spawns: 0.59,
        spawn_time: "1: 19",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Ice",
            "Flyig",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "069",
                name: "Bellsprout"
            },
            {
                num: "070",
                name: "Weepinbell"
            }
        ]
    },
    {
        id: 72,
        num: "072",
        name: "Tentacool",
        img: "http://www.serebii.net/pokemongo/pokemon/072.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water",
            "Poison"
        ],
        height: "0.89 m",
        weight: "45.5 kg",
        candy: "Tentacool Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.81,
        avg_spawns: 81,
        spawn_time: "03:20",
        multipliers: [
            2.52
        ],
        weaknesses: [
            "Electric",
            "Ground",
            "Psychic"
        ],
        next_evolution: [
            {
                num: "073",
                name: "Tentacruel"
            }
        ]
    },
    {
        id: 73,
        num: "073",
        name: "Tentacruel",
        img: "http://www.serebii.net/pokemongo/pokemon/073.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water",
            "Poison"
        ],
        height: "1.60 m",
        weight: "55.0 kg",
        candy: "Tentacool Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.082,
        avg_spawn: 8.2,
        spawn_time: "2: 36",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Ground",
            "Psycic"
        ],
        prev_evolution: [
            {
                num: "072",
                name: "Tentacool"
            }
        ]
    },
    {
        id: 74,
        num: "074",
        name: "Geodude",
        img: "http://www.serebii.net/pokemongo/pokemon/074.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Rock",
            "Ground"
        ],
        height: "0.41 m",
        weight: "20.0 kg",
        candy: "Geodude Candy",
        candy_count: 25,
        egg: "2 km",
        spawn_chance: 1.19,
        avg_spawns: 119,
        spawn_time: "12:40",
        multipliers: [
            1.75,
            1.76
        ],
        weaknesses: [
            "Water",
            "Grass",
            "Ice",
            "Fighting",
            "Ground",
            "Steel"
        ],
        next_evolution: [
            {
                num: "075",
                name: "Graveler"
            },
            {
                num: "076",
                name: "Golem"
            }
        ]
    },
    {
        id: 75,
        num: "075",
        name: "Graveler",
        img: "http://www.serebii.net/pokemongo/pokemon/075.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Rock",
            "Ground"
        ],
        height: "0.99 m",
        weight: "105.0 kg",
        candy: "Geodude Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.071,
        avg_spawns: 7.1,
        spawn_time: "04:53",
        multipliers: [
            1.64,
            1.72
        ],
        weaknesses: [
            "Water",
            "Grass",
            "Ice",
            "Fighting",
            "Ground",
            "Steel"
        ],
        prev_evolution: [
            {
                num: "074",
                name: "Geodude"
            }
        ],
        next_evolution: [
            {
                num: "076",
                name: "Golem"
            }
        ]
    },
    {
        id: 76,
        num: "076",
        name: "Golem",
        img: "http://www.serebii.net/pokemongo/pokemon/076.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Rock",
            "Ground"
        ],
        height: "1.40 m",
        weight: "300.0 kg",
        candy: "Geodude Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0047,
        avg_spawns: 0.47,
        spawn_time: "1: 16",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Grass",
            "Ie",
            "Fighting",
            "Ground",
            "Steel"
        ],
        prev_evolution: [
            {
                num: "074",
                name: "Geodude"
            },
            {
                num: "075",
                name: "Graveler"
            }
        ]
    },
    {
        id: 77,
        num: "077",
        name: "Ponyta",
        img: "http://www.serebii.net/pokemongo/pokemon/077.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fire"
        ],
        height: "0.99 m",
        weight: "30.0 kg",
        candy: "Ponyta Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.51,
        avg_spawns: 51,
        spawn_time: "02:50",
        multipliers: [
            1.48,
            1.5
        ],
        weaknesses: [
            "Water",
            "Ground",
            "Rock"
        ],
        next_evolution: [
            {
                num: "078",
                name: "Rapidash"
            }
        ]
    },
    {
        id: 78,
        num: "078",
        name: "Rapidash",
        img: "http://www.serebii.net/pokemongo/pokemon/078.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fire"
        ],
        height: "1.70 m",
        weight: "95.0 kg",
        candy: "Ponyta Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.011,
        avg_spawn: 1.1,
        spawn_time: "0:00",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Ground",
            "Rck"
        ],
        prev_evolution: [
            {
                num: "077",
                name: "Ponyta"
            }
        ]
    },
    {
        id: 79,
        num: "079",
        name: "Slowpoke",
        img: "http://www.serebii.net/pokemongo/pokemon/079.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water",
            "Psychic"
        ],
        height: "1.19 m",
        weight: "36.0 kg",
        candy: "Slowpoke Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 1.05,
        avg_spawns: 105,
        spawn_time: "07:12",
        multipliers: [
            2.21
        ],
        weaknesses: [
            "Electric",
            "Grass",
            "Bug",
            "Ghost",
            "Dark"
        ],
        next_evolution: [
            {
                num: "080",
                name: "Slowbro"
            }
        ]
    },
    {
        id: 80,
        num: "080",
        name: "Slowbro",
        img: "http://www.serebii.net/pokemongo/pokemon/080.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water",
            "Psychic"
        ],
        height: "1.60 m",
        weight: "78.5 kg",
        candy: "Slowpoke Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.036,
        avg_spawn: 3.6,
        spawn_time: "0: 56",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass",
            "Bg",
            "Ghost",
            "Dark"
        ],
        prev_evolution: [
            {
                num: "079",
                name: "Slowpoke"
            }
        ]
    },
    {
        id: 81,
        num: "081",
        name: "Magnemite",
        img: "http://www.serebii.net/pokemongo/pokemon/081.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Electric"
        ],
        height: "0.30 m",
        weight: "6.0 kg",
        candy: "Magnemite Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.71,
        avg_spawns: 71,
        spawn_time: "04:04",
        multipliers: [
            2.16,
            2.17
        ],
        weaknesses: [
            "Fire",
            "Water",
            "Ground"
        ],
        next_evolution: [
            {
                num: "082",
                name: "Magneton"
            }
        ]
    },
    {
        id: 82,
        num: "082",
        name: "Magneton",
        img: "http://www.serebii.net/pokemongo/pokemon/082.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Electric"
        ],
        height: "0.99 m",
        weight: "60.0 kg",
        candy: "Magnemite Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.023,
        avg_spawn: 2.3,
        spawn_time: "1: 25",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Water",
            "Grond"
        ],
        prev_evolution: [
            {
                num: "081",
                name: "Magnemite"
            }
        ]
    },
    {
        id: 83,
        num: "083",
        name: "Farfetch'd",
        img: "http://www.serebii.net/pokemongo/pokemon/083.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal",
            "Flying"
        ],
        height: "0.79 m",
        weight: "15.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "5 km",
        spawn_chnce: 0.0212,
        avg_spawns: 2.12,
        spawn_time: "0:09",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Rock"
        ]
    },
    {
        id: 84,
        num: "084",
        name: "Doduo",
        img: "http://www.serebii.net/pokemongo/pokemon/084.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal",
            "Flying"
        ],
        height: "1.40 m",
        weight: "39.2 kg",
        candy: "Doduo Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.52,
        avg_spawns: 52,
        spawn_time: "05:10",
        multipliers: [
            2.19,
            2.24
        ],
        weaknesses: [
            "Electric",
            "Rock"
        ],
        next_evolution: [
            {
                num: "085",
                name: "Dodrio"
            }
        ]
    },
    {
        id: 85,
        num: "085",
        name: "Dodrio",
        img: "http://www.serebii.net/pokemongo/pokemon/085.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal",
            "Flying"
        ],
        height: "1.80 m",
        weight: "85.2 kg",
        candy: "Doduo Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_hane: 0.22,
        avg_spaws: 22,
        spawn_time: "0: 12",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "084",
                name: "Doduo"
            }
        ]
    },
    {
        id: 86,
        num: "086",
        name: "Seel",
        img: "http://www.serebii.net/pokemongo/pokemon/086.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "1.09 m",
        weight: "90.0 kg",
        candy: "Seel Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.28,
        avg_spawns: 28,
        spawn_time: "06:46",
        multipliers: [
            1.04,
            1.96
        ],
        weaknesses: [
            "Electric",
            "Grass"
        ],
        next_evolution: [
            {
                num: "087",
                name: "Dewgong"
            }
        ]
    },
    {
        id: 87,
        num: "087",
        name: "Dewgong",
        img: "http://www.serebii.net/pokemongo/pokemon/087.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water",
            "Ice"
        ],
        height: "1.70 m",
        weight: "120.0 kg",
        candy: "Seel Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.013,
        avg_spawn: 1.3,
        spawn_time: "0:04",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass",
            "Fightig",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "086",
                name: "Seel"
            }
        ]
    },
    {
        id: 88,
        num: "088",
        name: "Grimer",
        img: "http://www.serebii.net/pokemongo/pokemon/088.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison"
        ],
        height: "0.89 m",
        weight: "30.0 kg",
        candy: "Grimer Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.052,
        avg_spawns: 5.2,
        spawn_time: "15:11",
        multipliers: [
            2.44
        ],
        weaknesses: [
            "Ground",
            "Psychic"
        ],
        next_evolution: [
            {
                num: "089",
                name: "Muk"
            }
        ]
    },
    {
        id: 89,
        num: "089",
        name: "Muk",
        img: "http://www.serebii.net/pokemongo/pokemon/089.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison"
        ],
        height: "1.19 m",
        weight: "30.0 kg",
        candy: "Grimer Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0031,
        avg_spawns: 0.31,
        spawn_time: "0: 28",
        multiplirs: null,
        weaknesses: [
            "Ground",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "088",
                name: "Grimer"
            }
        ]
    },
    {
        id: 90,
        num: "090",
        name: "Shellder",
        img: "http://www.serebii.net/pokemongo/pokemon/090.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "0.30 m",
        weight: "4.0 kg",
        candy: "Shellder Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.52,
        avg_spawns: 52,
        spawn_time: "07:39",
        multipliers: [
            2.65
        ],
        weaknesses: [
            "Electric",
            "Grass"
        ],
        next_evolution: [
            {
                num: "091",
                name: "Cloyster"
            }
        ]
    },
    {
        id: 91,
        num: "091",
        name: "Cloyster",
        img: "http://www.serebii.net/pokemongo/pokemon/091.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water",
            "Ice"
        ],
        height: "1.50 m",
        weight: "132.5 kg",
        candy: "Shellder Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.015,
        avg_spawn: 1.5,
        spawn_time: "0: 33",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass",
            "Fightig",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "090",
                name: "Shellder"
            }
        ]
    },
    {
        id: 92,
        num: "092",
        name: "Gastly",
        img: "http://www.serebii.net/pokemongo/pokemon/092.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ghost",
            "Poison"
        ],
        height: "1.30 m",
        weight: "0.1 kg",
        candy: "Gastly Candy",
        candy_count: 25,
        egg: "5 km",
        spawn_chance: 0.79,
        avg_spawns: 79,
        spawn_time: "04:21",
        multipliers: [
            1.78
        ],
        weaknesses: [
            "Ground",
            "Psychic",
            "Ghost",
            "Dark"
        ],
        next_evolution: [
            {
                num: "093",
                name: "Haunter"
            },
            {
                num: "094",
                name: "Gengar"
            }
        ]
    },
    {
        id: 93,
        num: "093",
        name: "Haunter",
        img: "http://www.serebii.net/pokemongo/pokemon/093.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ghost",
            "Poison"
        ],
        height: "1.60 m",
        weight: "0.1 kg",
        candy: "Gastly Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.052,
        avg_spawns: 5.2,
        spawn_time: "00:10",
        multipliers: [
            1.56,
            1.8
        ],
        weaknesses: [
            "Ground",
            "Psychic",
            "Ghost",
            "Dark"
        ],
        prev_evolution: [
            {
                num: "092",
                name: "Gastly"
            }
        ],
        next_evolution: [
            {
                num: "094",
                name: "Gengar"
            }
        ]
    },
    {
        id: 94,
        num: "094",
        name: "Gengar",
        img: "http://www.serebii.net/pokemongo/pokemon/094.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ghost",
            "Poison"
        ],
        height: "1.50 m",
        weight: "40.5 kg",
        candy: "Gastly Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0067,
        avg_spawns: 0.67,
        spawn_time: "0: 55",
        multiplirs: null,
        weaknesses: [
            "Ground",
            "Psychic",
            "Ghot",
            "Dark"
        ],
        prev_evolution: [
            {
                num: "092",
                name: "Gastly"
            },
            {
                num: "093",
                name: "Haunter"
            }
        ]
    },
    {
        id: 95,
        num: "095",
        name: "Onix",
        img: "http://www.serebii.net/pokemongo/pokemon/095.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Rock",
            "Ground"
        ],
        height: "8.79 m",
        weight: "210.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawnchace: 0.1,
        avg_spaws: 10,
        spawn_time: "0: 18",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Grass",
            "Ie",
            "Fighting",
            "Ground",
            "Steel"
        ]
    },
    {
        id: 96,
        num: "096",
        name: "Drowzee",
        img: "http://www.serebii.net/pokemongo/pokemon/096.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Psychic"
        ],
        height: "0.99 m",
        weight: "32.4 kg",
        candy: "Drowzee Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 3.21,
        avg_spawns: 321,
        spawn_time: "01:51",
        multipliers: [
            2.08,
            2.09
        ],
        weaknesses: [
            "Bug",
            "Ghost",
            "Dark"
        ],
        next_evolution: [
            {
                num: "097",
                name: "Hypno"
            }
        ]
    },
    {
        id: 97,
        num: "097",
        name: "Hypno",
        img: "http://www.serebii.net/pokemongo/pokemon/097.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Psychic"
        ],
        height: "1.60 m",
        weight: "75.6 kg",
        candy: "Drowzee Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawnchace: 0.1,
        avg_spaws: 10,
        spawn_time: "0: 17",
        multiplirs: null,
        weaknesses: [
            "Bug",
            "Ghost",
            "Drk"
        ],
        prev_evolution: [
            {
                num: "096",
                name: "Drowzee"
            }
        ]
    },
    {
        id: 98,
        num: "098",
        name: "Krabby",
        img: "http://www.serebii.net/pokemongo/pokemon/098.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "0.41 m",
        weight: "6.5 kg",
        candy: "Krabby Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 2.12,
        avg_spawns: 212,
        spawn_time: "03:33",
        multipliers: [
            2.36,
            2.4
        ],
        weaknesses: [
            "Electric",
            "Grass"
        ],
        next_evolution: [
            {
                num: "099",
                name: "Kingler"
            }
        ]
    },
    {
        id: 99,
        num: "099",
        name: "Kingler",
        img: "http://www.serebii.net/pokemongo/pokemon/099.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "1.30 m",
        weight: "60.0 kg",
        candy: "Krabby Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.062,
        avg_spawn: 6.2,
        spawn_time: "0: 44",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass"
        ],
        prev_evolution: [
            {
                num: "098",
                name: "Krabby"
            }
        ]
    },
    {
        id: 100,
        num: "100",
        name: "Voltorb",
        img: "http://www.serebii.net/pokemongo/pokemon/100.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Electric"
        ],
        height: "0.51 m",
        weight: "10.4 kg",
        candy: "Voltorb Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.65,
        avg_spawns: 65,
        spawn_time: "04:36",
        multipliers: [
            2.01,
            2.02
        ],
        weaknesses: [
            "Ground"
        ],
        next_evolution: [
            {
                num: "101",
                name: "Electrode"
            }
        ]
    },
    {
        id: 101,
        num: "101",
        name: "Electrode",
        img: "http://www.serebii.net/pokemongo/pokemon/101.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Electric"
        ],
        height: "1.19 m",
        weight: "66.6 kg",
        candy: "Voltorb Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_hane: 0.02,
        avg_spans: 2,
        spawn_time: "0: 10",
        multiplirs: null,
        weaknesses: [
            "Ground"
        ],
        prev_evolution: [
            {
                num: "100",
                name: "Voltorb"
            }
        ]
    },
    {
        id: 102,
        num: "102",
        name: "Exeggcute",
        img: "http://www.serebii.net/pokemongo/pokemon/102.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Grass",
            "Psychic"
        ],
        height: "0.41 m",
        weight: "2.5 kg",
        candy: "Exeggcute Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.78,
        avg_spawns: 78,
        spawn_time: "09:09",
        multipliers: [
            2.7,
            3.18
        ],
        weaknesses: [
            "Fire",
            "Ice",
            "Poison",
            "Flying",
            "Bug",
            "Ghost",
            "Dark"
        ],
        next_evolution: [
            {
                num: "103",
                name: "Exeggutor"
            }
        ]
    },
    {
        id: 103,
        num: "103",
        name: "Exeggutor",
        img: "http://www.serebii.net/pokemongo/pokemon/103.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Grass",
            "Psychic"
        ],
        height: "2.01 m",
        weight: "120.0 kg",
        candy: "Exeggcute Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.014,
        avg_spawn: 1.4,
        spawn_time: "1: 34",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Ice",
            "Poisn",
            "Flying",
            "Bug",
            "Ghost",
            "Dark"
        ],
        prev_evolution: [
            {
                num: "102",
                name: "Exeggcute"
            }
        ]
    },
    {
        id: 104,
        num: "104",
        name: "Cubone",
        img: "http://www.serebii.net/pokemongo/pokemon/104.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ground"
        ],
        height: "0.41 m",
        weight: "6.5 kg",
        candy: "Cubone Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.61,
        avg_spawns: 61,
        spawn_time: "01:51",
        multipliers: [
            1.67
        ],
        weaknesses: [
            "Water",
            "Grass",
            "Ice"
        ],
        next_evolution: [
            {
                num: "105",
                name: "Marowak"
            }
        ]
    },
    {
        id: 105,
        num: "105",
        name: "Marowak",
        img: "http://www.serebii.net/pokemongo/pokemon/105.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ground"
        ],
        height: "0.99 m",
        weight: "45.0 kg",
        candy: "Cubone Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_hane: 0.02,
        avg_spans: 2,
        spawn_time: "0: 59",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Grass",
            "ce"
        ],
        prev_evolution: [
            {
                num: "104",
                name: "Cubone"
            }
        ]
    },
    {
        id: 106,
        num: "106",
        name: "Hitmonlee",
        img: "http://www.serebii.net/pokemongo/pokemon/106.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fighting"
        ],
        height: "1.50 m",
        weight: "49.8 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawn_hane: 0.02,
        avg_spans: 2,
        spawn_time: "0: 59",
        multiplirs: null,
        weaknesses: [
            "Flying",
            "Psychic",
            "Fary"
        ]
    },
    {
        id: 107,
        num: "107",
        name: "Hitmonchan",
        img: "http://www.serebii.net/pokemongo/pokemon/107.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fighting"
        ],
        height: "1.40 m",
        weight: "50.2 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawn_canc: 0.022,
        avg_spawn: 2.2,
        spawn_time: "0: 58",
        multiplirs: null,
        weaknesses: [
            "Flying",
            "Psychic",
            "Fary"
        ]
    },
    {
        id: 108,
        num: "108",
        name: "Lickitung",
        img: "http://www.serebii.net/pokemongo/pokemon/108.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "1.19 m",
        weight: "65.5 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "5 km",
        spawn_canc: 0.011,
        avg_spawn: 1.1,
        spawn_time: "0: 46",
        multiplirs: null,
        weaknesses: [
            "Fighting"
        ]
    },
    {
        id: 109,
        num: "109",
        name: "Koffing",
        img: "http://www.serebii.net/pokemongo/pokemon/109.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison"
        ],
        height: "0.61 m",
        weight: "1.0 kg",
        candy: "Koffing Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chanc: 0.2,
        avg_spawns: 20,
        spawn_time: "08:16",
        multipliers: [
            1.11
        ],
        weaknesses: [
            "Ground",
            "Psychic"
        ],
        next_evolution: [
            {
                num: "110",
                name: "Weezing"
            }
        ]
    },
    {
        id: 110,
        num: "110",
        name: "Weezing",
        img: "http://www.serebii.net/pokemongo/pokemon/110.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Poison"
        ],
        height: "1.19 m",
        weight: "9.5 kg",
        candy: "Koffing Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.016,
        avg_spawn: 1.6,
        spawn_time: "1: 17",
        multiplirs: null,
        weaknesses: [
            "Ground",
            "Psychic"
        ],
        prev_evolution: [
            {
                num: "109",
                name: "Koffing"
            }
        ]
    },
    {
        id: 111,
        num: "111",
        name: "Rhyhorn",
        img: "http://www.serebii.net/pokemongo/pokemon/111.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ground",
            "Rock"
        ],
        height: "0.99 m",
        weight: "115.0 kg",
        candy: "Rhyhorn Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 0.63,
        avg_spawns: 63,
        spawn_time: "03:21",
        multipliers: [
            1.91
        ],
        weaknesses: [
            "Water",
            "Grass",
            "Ice",
            "Fighting",
            "Ground",
            "Steel"
        ],
        next_evolution: [
            {
                num: "112",
                name: "Rhydon"
            }
        ]
    },
    {
        id: 112,
        num: "112",
        name: "Rhydon",
        img: "http://www.serebii.net/pokemongo/pokemon/112.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ground",
            "Rock"
        ],
        height: "1.91 m",
        weight: "120.0 kg",
        candy: "Rhyhorn Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.022,
        avg_spawn: 2.2,
        spawn_time: "0: 50",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Grass",
            "Ie",
            "Fighting",
            "Ground",
            "Steel"
        ],
        prev_evolution: [
            {
                num: "111",
                name: "Rhyhorn"
            }
        ]
    },
    {
        id: 113,
        num: "113",
        name: "Chansey",
        img: "http://www.serebii.net/pokemongo/pokemon/113.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "1.09 m",
        weight: "34.6 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawn_canc: 0.013,
        avg_spawn: 1.3,
        spawn_time: "0: 46",
        multiplirs: null,
        weaknesses: [
            "Fighting"
        ]
    },
    {
        id: 114,
        num: "114",
        name: "Tangela",
        img: "http://www.serebii.net/pokemongo/pokemon/114.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Grass"
        ],
        height: "0.99 m",
        weight: "35.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "5 km",
        spawn_canc: 0.228,
        avg_spawns: 22.8,
        spawn_time: "2: 13",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Ice",
            "Poisn",
            "Flying",
            "Bug"
        ]
    },
    {
        id: 115,
        num: "115",
        name: "Kangaskhan",
        img: "http://www.serebii.net/pokemongo/pokemon/115.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "2.21 m",
        weight: "80.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "5 km",
        spawn_chnce: 0.0086,
        avg_spawns: 0.86,
        spawn_time: "0: 40",
        multiplirs: null,
        weaknesses: [
            "Fighting"
        ]
    },
    {
        id: 116,
        num: "116",
        name: "Horsea",
        img: "http://www.serebii.net/pokemongo/pokemon/116.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "0.41 m",
        weight: "8.0 kg",
        candy: "Horsea Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 1.13,
        avg_spawns: 113,
        spawn_time: "02:53",
        multipliers: [
            2.23
        ],
        weaknesses: [
            "Electric",
            "Grass"
        ],
        next_evolution: [
            {
                num: "117",
                name: "Seadra"
            }
        ]
    },
    {
        id: 117,
        num: "117",
        name: "Seadra",
        img: "http://www.serebii.net/pokemongo/pokemon/117.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "1.19 m",
        weight: "25.0 kg",
        candy: "Horsea Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.034,
        avg_spawn: 3.4,
        spawn_time: "0: 18",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass"
        ],
        prev_evolution: [
            {
                num: "116",
                name: "Horsea"
            }
        ]
    },
    {
        id: 118,
        num: "118",
        name: "Goldeen",
        img: "http://www.serebii.net/pokemongo/pokemon/118.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "0.61 m",
        weight: "15.0 kg",
        candy: "Goldeen Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 2.18,
        avg_spawns: 218,
        spawn_time: "03:14",
        multipliers: [
            2.15,
            2.2
        ],
        weaknesses: [
            "Electric",
            "Grass"
        ],
        next_evolution: [
            {
                num: "119",
                name: "Seaking"
            }
        ]
    },
    {
        id: 119,
        num: "119",
        name: "Seaking",
        img: "http://www.serebii.net/pokemongo/pokemon/119.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "1.30 m",
        weight: "39.0 kg",
        candy: "Goldeen Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_hane: 0.08,
        avg_spans: 8,
        spawn_time: "0: 21",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass"
        ],
        prev_evolution: [
            {
                num: "118",
                name: "Goldeen"
            }
        ]
    },
    {
        id: 120,
        num: "120",
        name: "Staryu",
        img: "http://www.serebii.net/pokemongo/pokemon/120.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "0.79 m",
        weight: "34.5 kg",
        candy: "Staryu Candy",
        candy_count: 50,
        egg: "5 km",
        spawn_chance: 1.95,
        avg_spawns: 195,
        spawn_time: "22:59",
        multipliers: [
            2.38,
            2.41
        ],
        weaknesses: [
            "Electric",
            "Grass"
        ],
        next_evolution: [
            {
                num: "121",
                name: "Starmie"
            }
        ]
    },
    {
        id: 121,
        num: "121",
        name: "Starmie",
        img: "http://www.serebii.net/pokemongo/pokemon/121.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water",
            "Psychic"
        ],
        height: "1.09 m",
        weight: "80.0 kg",
        candy: "Staryu Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.034,
        avg_spawn: 3.4,
        spawn_time: "0: 57",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass",
            "Bg",
            "Ghost",
            "Dark"
        ],
        prev_evolution: [
            {
                num: "120",
                name: "Staryu"
            }
        ]
    },
    {
        id: 122,
        num: "122",
        name: "Mr. Mime",
        img: "http://www.serebii.net/pokemongo/pokemon/122.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Psychic"
        ],
        height: "1.30 m",
        weight: "54.5 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawn_chnce: 0.0031,
        avg_spawns: 0.31,
        spawn_time: "0: 51",
        multiplirs: null,
        weaknesses: [
            "Bug",
            "Ghost",
            "Drk"
        ]
    },
    {
        id: 123,
        num: "123",
        name: "Scyther",
        img: "http://www.serebii.net/pokemongo/pokemon/123.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Bug",
            "Flying"
        ],
        height: "1.50 m",
        weight: "56.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawn_hane: 0.14,
        avg_spaws: 14,
        spawn_time: "0: 43",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Electric",
            "Ie",
            "Flying",
            "Rock"
        ]
    },
    {
        id: 124,
        num: "124",
        name: "Jynx",
        img: "http://www.serebii.net/pokemongo/pokemon/124.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ice",
            "Psychic"
        ],
        height: "1.40 m",
        weight: "40.6 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawn_hane: 0.35,
        avg_spaws: 35,
        spawn_time: "0: 41",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Bug",
            "Rok",
            "Ghost",
            "Dark",
            "Steel"
        ]
    },
    {
        id: 125,
        num: "125",
        name: "Electabuzz",
        img: "http://www.serebii.net/pokemongo/pokemon/125.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Electric"
        ],
        height: "1.09 m",
        weight: "30.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawn_canc: 0.074,
        avg_spawn: 7.4,
        spawn_time: "0: 28",
        multiplirs: null,
        weaknesses: [
            "Ground"
        ]
    },
    {
        id: 126,
        num: "126",
        name: "Magmar",
        img: "http://www.serebii.net/pokemongo/pokemon/126.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fire"
        ],
        height: "1.30 m",
        weight: "44.5 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawnchace: 0.1,
        avg_spaws: 10,
        spawn_time: "2: 36",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Ground",
            "Rck"
        ]
    },
    {
        id: 127,
        num: "127",
        name: "Pinsir",
        img: "http://www.serebii.net/pokemongo/pokemon/127.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Bug"
        ],
        height: "1.50 m",
        weight: "55.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawn_hane: 0.99,
        avg_spaws: 99,
        spawn_time: "0: 25",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Flying",
            "Rck"
        ]
    },
    {
        id: 128,
        num: "128",
        name: "Tauros",
        img: "http://www.serebii.net/pokemongo/pokemon/128.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "1.40 m",
        weight: "88.4 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "5 km",
        spawn_hane: 0.12,
        avg_spaws: 12,
        spawn_time: "0: 37",
        multiplirs: null,
        weaknesses: [
            "Fighting"
        ]
    },
    {
        id: 129,
        num: "129",
        name: "Magikarp",
        img: "http://www.serebii.net/pokemongo/pokemon/129.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "0.89 m",
        weight: "10.0 kg",
        candy: "Magikarp Candy",
        candy_count: 400,
        egg: "2 km",
        spawn_chance: 4.78,
        avg_spawns: 478,
        spawn_time: "14:26",
        multipliers: [
            10.1,
            11.8
        ],
        weaknesses: [
            "Electric",
            "Grass"
        ],
        next_evolution: [
            {
                num: "130",
                name: "Gyarados"
            }
        ]
    },
    {
        id: 130,
        num: "130",
        name: "Gyarados",
        img: "http://www.serebii.net/pokemongo/pokemon/130.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water",
            "Flying"
        ],
        height: "6.50 m",
        weight: "235.0 kg",
        candy: "Magikarp Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0032,
        avg_spawns: 0.32,
        spawn_time: "0: 15",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Rock"
        ],
        prev_evolution: [
            {
                num: "129",
                name: "Magikarp"
            }
        ]
    },
    {
        id: 131,
        num: "131",
        name: "Lapras",
        img: "http://www.serebii.net/pokemongo/pokemon/131.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water",
            "Ice"
        ],
        height: "2.49 m",
        weight: "220.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawn_canc: 0.006,
        avg_spawn: 0.6,
        spawn_time: "0: 59",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass",
            "Fightig",
            "Rock"
        ]
    },
    {
        id: 132,
        num: "132",
        name: "Ditto",
        img: "http://www.serebii.net/pokemongo/pokemon/132.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "0.30 m",
        weight: "4.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        span_cance: 0,
        avg_spans: 0,
        spawn_time: "N / A",
        multiplirs: null,
        weaknesses: [
            "Fighting"
        ]
    },
    {
        id: 133,
        num: "133",
        name: "Eevee",
        img: "http://www.serebii.net/pokemongo/pokemon/133.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "0.30 m",
        weight: "6.5 kg",
        candy: "Eevee Candy",
        candy_count: 25,
        egg: "10 km",
        spawn_chance: 2.75,
        avg_spawns: 275,
        spawn_time: "05:32",
        multipliers: [
            2.02,
            2.64
        ],
        weaknesses: [
            "Fighting"
        ],
        next_evolution: [
            {
                num: "134",
                name: "Vaporeon"
            },
            {
                num: "135",
                name: "Jolteon"
            },
            {
                num: "136",
                name: "Flareon"
            }
        ]
    },
    {
        id: 134,
        num: "134",
        name: "Vaporeon",
        img: "http://www.serebii.net/pokemongo/pokemon/134.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Water"
        ],
        height: "0.99 m",
        weight: "29.0 kg",
        candy: "Eevee Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.014,
        avg_spawn: 1.4,
        spawn_time: "1: 54",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass"
        ],
        prev_evolution: [
            {
                num: "133",
                name: "Eevee"
            }
        ]
    },
    {
        id: 135,
        num: "135",
        name: "Jolteon",
        img: "http://www.serebii.net/pokemongo/pokemon/135.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Electric"
        ],
        height: "0.79 m",
        weight: "24.5 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.012,
        avg_spawn: 1.2,
        spawn_time: "0: 30",
        multiplirs: null,
        weaknesses: [
            "Ground"
        ],
        prev_evolution: [
            {
                num: "133",
                name: "Eevee"
            }
        ]
    },
    {
        id: 136,
        num: "136",
        name: "Flareon",
        img: "http://www.serebii.net/pokemongo/pokemon/136.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fire"
        ],
        height: "0.89 m",
        weight: "25.0 kg",
        candy: "Eevee Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_canc: 0.017,
        avg_spawn: 1.7,
        spawn_time: "0:02",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Ground",
            "Rck"
        ],
        prev_evolution: [
            {
                num: "133",
                name: "Eevee"
            }
        ]
    },
    {
        id: 137,
        num: "137",
        name: "Porygon",
        img: "http://www.serebii.net/pokemongo/pokemon/137.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "0.79 m",
        weight: "36.5 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "5 km",
        spawn_canc: 0.012,
        avg_spawn: 1.2,
        spawn_time: "0: 49",
        multiplirs: null,
        weaknesses: [
            "Fighting"
        ]
    },
    {
        id: 138,
        num: "138",
        name: "Omanyte",
        img: "http://www.serebii.net/pokemongo/pokemon/138.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Rock",
            "Water"
        ],
        height: "0.41 m",
        weight: "7.5 kg",
        candy: "Omanyte Candy",
        candy_count: 50,
        gg: "10 km",
        spawn_chance: 0.14,
        avg_spawns: 14,
        spawn_time: "10:23",
        multipliers: [
            2.12
        ],
        weaknesses: [
            "Electric",
            "Grass",
            "Fighting",
            "Ground"
        ],
        next_evolution: [
            {
                num: "139",
                name: "Omastar"
            }
        ]
    },
    {
        id: 139,
        num: "139",
        name: "Omastar",
        img: "http://www.serebii.net/pokemongo/pokemon/139.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Rock",
            "Water"
        ],
        height: "0.99 m",
        weight: "35.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "Omante Candy",
        spawn_chnce: 0.0061,
        avg_spawns: 0.61,
        spawn_time: "0:04",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass",
            "Fightig",
            "Ground"
        ],
        prev_evolution: [
            {
                num: "138",
                name: "Omanyte"
            }
        ]
    },
    {
        id: 140,
        num: "140",
        name: "Kabuto",
        img: "http://www.serebii.net/pokemongo/pokemon/140.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Rock",
            "Water"
        ],
        height: "0.51 m",
        weight: "11.5 kg",
        candy: "Kabuto Candy",
        candy_count: 50,
        gg: "10 km",
        spawn_chanc: 0.1,
        avg_spawns: 10,
        spawn_time: "00:05",
        multipliers: [
            1.97,
            2.37
        ],
        weaknesses: [
            "Electric",
            "Grass",
            "Fighting",
            "Ground"
        ],
        next_evolution: [
            {
                num: "141",
                name: "Kabutops"
            }
        ]
    },
    {
        id: 141,
        num: "141",
        name: "Kabutops",
        img: "http://www.serebii.net/pokemongo/pokemon/141.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Rock",
            "Water"
        ],
        height: "1.30 m",
        weight: "40.5 kg",
        candy: "Kabuto Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0032,
        avg_spawns: 0.32,
        spawn_time: "2: 40",
        multiplirs: null,
        weaknesses: [
            "Electric",
            "Grass",
            "Fightig",
            "Ground"
        ],
        prev_evolution: [
            {
                num: "140",
                name: "Kabuto"
            }
        ]
    },
    {
        id: 142,
        num: "142",
        name: "Aerodactyl",
        img: "http://www.serebii.net/pokemongo/pokemon/142.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Rock",
            "Flying"
        ],
        height: "1.80 m",
        weight: "59.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawn_canc: 0.018,
        avg_spawn: 1.8,
        spawn_time: "2: 40",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Electric",
            "Ie",
            "Rock",
            "Steel"
        ]
    },
    {
        id: 143,
        num: "143",
        name: "Snorlax",
        img: "http://www.serebii.net/pokemongo/pokemon/143.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Normal"
        ],
        height: "2.11 m",
        weight: "460.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "10 k",
        spawn_canc: 0.016,
        avg_spawn: 1.6,
        spawn_time: "2: 40",
        multiplirs: null,
        weaknesses: [
            "Fighting"
        ]
    },
    {
        id: 144,
        num: "144",
        name: "Articuno",
        img: "http://www.serebii.net/pokemongo/pokemon/144.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Ice",
            "Flying"
        ],
        height: "1.70 m",
        weight: "55.4 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        span_cance: 0,
        avg_spans: 0,
        spawn_time: "N / A",
        multiplirs: null,
        weaknesses: [
            "Fire",
            "Electric",
            "Rok",
            "Steel"
        ]
    },
    {
        id: 145,
        num: "145",
        name: "Zapdos",
        img: "http://www.serebii.net/pokemongo/pokemon/145.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Electric",
            "Flying"
        ],
        height: "1.60 m",
        weight: "52.6 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        span_cance: 0,
        avg_spans: 0,
        spawn_time: "N / A",
        multiplirs: null,
        weaknesses: [
            "Ice",
            "Rock"
        ]
    },
    {
        id: 146,
        num: "146",
        name: "Moltres",
        img: "http://www.serebii.net/pokemongo/pokemon/146.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Fire",
            "Flying"
        ],
        height: "2.01 m",
        weight: "60.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        span_cance: 0,
        avg_spans: 0,
        spawn_time: "N / A",
        multiplirs: null,
        weaknesses: [
            "Water",
            "Electric",
            "Rck"
        ]
    },
    {
        id: 147,
        num: "147",
        name: "Dratini",
        img: "http://www.serebii.net/pokemongo/pokemon/147.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Dragon"
        ],
        height: "1.80 m",
        weight: "3.3 kg",
        candy: "Dratini Candy",
        candy_count: 25,
        gg: "10 km",
        spawn_chanc: 0.3,
        avg_spawns: 30,
        spawn_time: "06:41",
        multipliers: [
            1.83,
            1.84
        ],
        weaknesses: [
            "Ice",
            "Dragon",
            "Fairy"
        ],
        next_evolution: [
            {
                num: "148",
                name: "Dragonair"
            },
            {
                num: "149",
                name: "Dragonite"
            }
        ]
    },
    {
        id: 148,
        num: "148",
        name: "Dragonair",
        img: "http://www.serebii.net/pokemongo/pokemon/148.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Dragon"
        ],
        height: "3.99 m",
        weight: "16.5 kg",
        candy: "Dratini Candy",
        candy_count: 100,
        egg: "Notin Eggs",
        spawn_chance: 0.02,
        avg_spawn: 2,
        spawn_time: "11:57",
        multipliers: [
            2.05
        ],
        weaknesses: [
            "Ice",
            "Dragon",
            "Fairy"
        ],
        prev_evolution: [
            {
                num: "147",
                name: "Dratini"
            }
        ],
        next_evolution: [
            {
                num: "149",
                name: "Dragonite"
            }
        ]
    },
    {
        id: 149,
        num: "149",
        name: "Dragonite",
        img: "http://www.serebii.net/pokemongo/pokemon/149.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Dragon",
            "Flying"
        ],
        height: "2.21 m",
        weight: "210.0 kg",
        candy: "Dratini Candy",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        spawn_chnce: 0.0011,
        avg_spawns: 0.11,
        spawn_time: "2: 38",
        multiplirs: null,
        weaknesses: [
            "Ice",
            "Rock",
            "Dragn",
            "Fairy"
        ],
        prev_evolution: [
            {
                num: "147",
                name: "Dratini"
            },
            {
                num: "148",
                name: "Dragonair"
            }
        ]
    },
    {
        id: 150,
        num: "150",
        name: "Mewtwo",
        img: "http://www.serebii.net/pokemongo/pokemon/150.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        type: [
            "Psychic"
        ],
        height: "2.01 m",
        weight: "122.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        span_cance: 0,
        avg_spans: 0,
        spawn_time: "N / A",
        multiplirs: null,
        weaknesses: [
            "Bug",
            "Ghost",
            "Drk"
        ]
    },
    {
        id: 151,
        num: "151",
        imgLogoRed: 'https://avatars.mds.yandex.net/i?id=d508d515770ee4cac6771043cbcb877619845908-12615871-images-thumbs&n=13',
        name: "Mew",
        img: "http://www.serebii.net/pokemongo/pokemon/151.png",
        imgLogo: 'https://avatars.mds.yandex.net/i?id=bd98cc622301a0943402ab0c9856bd0dec1b4f18-12494956-images-thumbs&n=13',
        type: [
            "Psychic"
        ],
        height: "0.41 m",
        weight: "4.0 kg",
        candy: "None",
        candy_count: "age is not determined!",
        egg: "Not n Eggs",
        span_cance: 0,
        avg_spans: 0,
        spawn_time: "N / A",
        multiplirs: null,
        weaknesses: [
            "Bug",
            "Ghost",
            "Drk"
        ]
    }
];