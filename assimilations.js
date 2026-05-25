// ======================================
// ASSIMILAÇÕES
// ======================================

const assimilations = [

    {
        nome: "Sede Carmesim",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Sempre que causar dano recupera igual VIG em PV"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Recupera VIG x2 PV e +3 contra sangramento"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Recupera VIG x4 PV e +5 contra sangramento"
            }

        ]
    },

    {
        nome: "Alteração Sanguínea",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Assume outra aparência e recebe +5 sociais"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Cria clone de sangue"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Cria receptáculo permanente"
            }

        ]
    },

    {
        nome: "Presas",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Após 2 ataques causa 2d4+1"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Dano aumenta para 3d4+2"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Dano aumenta para 4d4+3"
            }

        ]
    },

    {
        nome: "Sangue Tóxico",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Atacantes sofrem 1d6 de dano de Sangue"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Retaliação aumenta para 2d6"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Retaliação aumenta para 3d6 e aplica Sangramento"
            }

        ]
    },

    {
        nome: "Corpo Regenerativo",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Recupera 1d6+1 PV por turno"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Recupera 2d6+2 PV por turno"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Recupera 3d4+3 PV e retorna com 1 PV"
            }

        ]
    },

    {
        nome: "Frenesi Permanente",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "+2 ataque e +2 dano"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "+4 ataque e +4 dano"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "+6 ataque e +6 dano"
            }

        ]
    },

    {
        nome: "Mutação Latente",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Transformação até 3 pontos"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Transformação até 5 pontos"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Transformação até 7 pontos"
            }

        ]
    },

    {
        nome: "Casca de Carne",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "RD 5 contra dano mundano e Sangue"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 6,
                descricao:
                "RD 15"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 9,
                descricao:
                "RD 25 e pode dobrar resistência"
            }

        ]
    },

    {
        nome: "Predador Natural",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "+1 PD e +8 PV ao abater"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 6,
                descricao:
                "+2 PD e +11 PV ao abater"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 9,
                descricao:
                "+4 PD, +1 PD máximo permanente e finaliza adjacentes"
            }

        ]
    },

    {
        nome: "Sacrifício Vivo",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "1 PV = +1 dano até limite 10"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "6 PV = 1 ponto de Sangue temporário"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "1 PV = +2 dano até limite 20"
            }

        ]
    },

    {
        nome: "Sangue Sem Fim",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Abaixo de 50% PV pode curar 20 PV"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Cura aumenta para 30 PV"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Cura aumenta para 60 PV sem custo de PA"
            }

        ]
    },

    {
        nome: "Crueldade",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Dano desarmado sobe um passo"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Ataques desarmados recebem +1d4 Sangue"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Punhos viram lâminas 1d6+2"
            }

        ]
    },

    {
        nome: "Sangramento Devastador",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Todos ataques podem causar Sangramento"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Sangramento recebe +3 dano"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Inimigos recebem -5 contra Sangramento"
            }

        ]
    },

        {
        nome: "Forma Aberrante",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "+5 Intimidação e +3 dano físico"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Dano físico sobe 1 passo"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "+5 Atletismo, escala paredes e ignora terreno difícil"
            }

        ]
    },

    {
        nome: "Diabrete",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "+5 Intimidação e +1 ponto permanente de Sangue"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "RD igual VIG contra Sangue e +1 dado Intimidação"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Criaturas de Sangue não atacam automaticamente"
            }

        ]
    },

    {
        nome: "Asas Profanas",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 8,
                descricao:
                "Recebe deslocamento aéreo de 12m e ignora terreno difícil"
            }

        ]
    },

    {
        nome: "Alimento",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Consumir corpos cura 2d4+4 PV"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Cura aumenta para 2d6+6"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Cura aumenta para 2d12+8"
            }

        ]
    },

    {
        nome: "Predador Mental",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Marca alvo e causa 5 dano sempre que gastar 1 PA"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Dano aumenta para 8"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Dano aumenta para 10"
            }

        ]
    },

    {
        nome: "Sangue Fresco",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Pode doar até 10 PV para aliados adjacentes"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Limite aumenta para 20 PV"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "A cura doada duplica"
            }

        ]
    },

    // ======================================
// ASSIMILAÇÕES MORTE
// ======================================

{
    nome: "Enxame",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "Invoca lodo necromântico em 9m ou 2 posições. Terreno difícil, -4 testes físicos por 1d4 rodadas"
        },

        {
            nome: "Evolução I",
            descricao:
            "Área causa 3d6 de dano de Morte por rodada e aplica Vulnerável após 2 rodadas"
        },

        {
            nome: "Evolução II",
            descricao:
            "Área aumenta para 18m ou 4 posições, dura 6 rodadas, causa 3d10 por rodada, reduz 6m deslocamento e saída exige Atletismo. Colapso final: 8d10"
        }

    ]
},

{
    nome: "Toque da Extinção",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "Ataques corpo a corpo causam +1d6 de Morte"
        },

        {
            nome: "Evolução I",
            descricao:
            "+2d6 de Morte e aplica anti-cura por 1 rodada. VIG reduz metade"
        },

        {
            nome: "Evolução II",
            descricao:
            "+3d4 de Morte e anti-cura por 2 rodadas. VIG evita"
        }

    ]
},

{
    nome: "Corpo Apodrecido",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "RD 5 contra dano mundano e Morte"
        },

        {
            nome: "Evolução I",
            descricao:
            "RD 10 e atacante sofre 1d4 de Morte"
        },

        {
            nome: "Evolução II",
            descricao:
            "RD 15, atacante sofre 1d6+2 de Morte e recebe +5 contra Sangramento e Envenenamento"
        }

    ]
},

{
    nome: "Simbionte da Ruína",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "Recupera 1d4 PV ao causar dano e aplica -2 Atletismo/Acrobacia acumulando até -10"
        },

        {
            nome: "Evolução I",
            descricao:
            "Recupera 1d6 PV e recebe 20 PV temporários abaixo de 50% PV 1 vez por cena"
        },

        {
            nome: "Evolução II",
            descricao:
            "Recupera 2d6 PV. Ao chegar em 0 PV o simbionte assume com 5 PV temporários, 3d10+8 de dano, 4 PA, 9m e imunidade a Morte"
        }

    ]
},

{
    nome: "Aceleração da Entropia",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "Alvos acertados sofrem -2 ataque e Defesa por 1d4 rodadas"
        },

        {
            nome: "Evolução I",
            descricao:
            "-3 ataque e Defesa acumulando até -10 por 1d4+1 rodadas"
        },

        {
            nome: "Evolução II",
            descricao:
            "-5 ataque e Defesa acumulando até -15 por 1d4+2 rodadas"
        }

    ]
},

{
    nome: "Marca da Morte",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "1 PA +3 PD. Ataques acumulam até 5 dados de 1d8+1. Descarga custa 2 PA"
        },

        {
            nome: "Evolução I",
            descricao:
            "Limite aumenta para 7 dados"
        },

        {
            nome: "Evolução II",
            descricao:
            "Limite aumenta para 10 dados e descarga total recupera 4 PD"
        }

    ]
},

{
    nome: "Atraso Inevitável",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "1 PA +3 PD. Alvo sofre -2 iniciativa e age por último"
        },

        {
            nome: "Evolução I",
            descricao:
            "-4 iniciativa e alvo perde 1 PA"
        },

        {
            nome: "Evolução II",
            descricao:
            "Aplica Paralisia 1 vez por cena"
        }

    ]
},

{
    nome: "Decomposição Progressiva",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "1d6 de dano de Morte por rodada durante 1d4 rodadas"
        },

        {
            nome: "Evolução I",
            descricao:
            "Dano aumenta para 2d6"
        },

        {
            nome: "Evolução II",
            descricao:
            "Dano aumenta para 3d6 e aplica Lentidão por 1d4 rodadas"
        }

    ]
},

{
    nome: "Consumir Cadáver",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "1 PA. Recebe +10 PV temporários, +5 PD temporários e remove Sangramento"
        },

        {
            nome: "Evolução I",
            descricao:
            "+5 em Vontade"
        },

        {
            nome: "Evolução II",
            descricao:
            "+20 PV temporários, +10 PD temporários e remove Cansado e Traumatizado"
        }

    ]
},

{
    nome: "Servo Cadavérico",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "Invoca servo com 20 PV, ataque 2d20+10, dano 1d6+3, 6m, duração cena e limite 1"
        },

        {
            nome: "Evolução I",
            descricao:
            "Servo recebe 30 PV, dano 2d6+4 e limite 2"
        },

        {
            nome: "Evolução II",
            descricao:
            "Servo recebe 40 PV, ataque 3d20+15, dano 3d6+4 e limite 3"
        }

    ]
},

{
    nome: "Membro Profano",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "Recebe 1 ataque extra por turno sem custo de PA causando 2d6 de Morte"
        },

        {
            nome: "Evolução I",
            descricao:
            "Dano aumenta para 2d6+2 e recebe +5 para agarrar ou empurrar"
        },

        {
            nome: "Evolução II",
            descricao:
            "Recebe tentáculo adicional, dano 3d6+4, alcance 1-3 e ignora terreno difícil"
        }

    ]
},

{
    nome: "Véu da Morte",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "2 PA. Área 3m ou 1-2 aplica Penumbra e causa 1d6 por rodada durante 1d4 rodadas"
        },

        {
            nome: "Evolução I",
            descricao:
            "Área aumenta para 6m ou 1-3 e dano para 2d6 por 1d4+1 rodadas"
        },

        {
            nome: "Evolução II",
            descricao:
            "Área aumenta para 9m ou 1-4, dano 3d6 por 1d4+2 rodadas e recupera PV igual ao dano causado"
        }

    ]
},

{
    nome: "Parada Temporal",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "1 PA +2 PD. Estado temporal acelerado, -5 para ataques de projéteis contra você e RD 10 contra projéteis"
        },

        {
            nome: "Evolução I",
            descricao:
            "1 PA +4 PD. Área 3m aplica -10 em Esquiva e Reflexos"
        },

        {
            nome: "Evolução II",
            descricao:
            "3 PA +6 PD. Congela o tempo por 1 rodada, críticos garantidos e falha automática de resistência"
        }

    ]
},

{
    nome: "Presença Obscura",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "Aura sobrenatural e imunidade a Penumbra"
        },

        {
            nome: "Evolução I",
            descricao:
            "Imunidade a Cegueira"
        },

        {
            nome: "Evolução II",
            descricao:
            "3 PA +4 PD. Área 9m ou 1-4 aplica Penumbra por 3 rodadas e Surdez por 1 rodada"
        }

    ]
},

{
    nome: "Atrasar Fim",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "No início do descanso pode sofrer 5 dano e armazenar esses PV. Ao cair pode consumir o armazenamento para permanecer de pé 1 vez por cena"
        },

        {
            nome: "Evolução I",
            descricao:
            "Aumenta armazenamento em 15"
        },

        {
            nome: "Evolução II",
            descricao:
            "Pode ativar até 2 vezes por cena caso tenha armazenamento"
        }

    ]
},

{
    nome: "Negligenciar Condição",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "2 PA para remover uma condição em si próprio"
        },

        {
            nome: "Evolução I",
            descricao:
            "Reduz custo em 1 PA"
        },

        {
            nome: "Evolução II",
            descricao:
            "Imune a Cansado"
        }

    ]
},

{
    nome: "Visão Macabra",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "Imune a Cego"
        },

        {
            nome: "Evolução I",
            descricao:
            "+10 em Percepção para sentir criaturas"
        },

        {
            nome: "Evolução II",
            descricao:
            "Criaturas de Morte não atacam você se forem ignoradas"
        }

    ]
},

{
    nome: "Marcado pelo Fim",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "Margem de morte letal aumenta para 200%"
        },

        {
            nome: "Evolução I",
            descricao:
            "Ao sair de Morrendo recebe 10 PV temporários"
        },

        {
            nome: "Evolução II",
            descricao:
            "Executar você exige 4 PA"
        }

    ]
},

{
    nome: "Tempo Perdido",
    elemento: "Morte",
    custo: [4,8,12],

    evolucoes: [

        {
            nome: "Base",
            descricao:
            "Efeitos de envelhecimento envelhecem no máximo 2 anos"
        },

        {
            nome: "Evolução I",
            descricao:
            "Ataques físicos ou toque envelhecem o alvo em 2 anos"
        },

        {
            nome: "Evolução II",
            descricao:
            "Efeitos de cura de Morte em você sempre curam o máximo"
        }

    ]
},

    {
        nome: "Teleporte Cinético",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Teleporta até 3m ou posição adjacente sem provocar ataques de oportunidade"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Alcance aumenta para 6m ou 1-2 e pode ser usado como reação anulando o dano recebido"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Alcance aumenta para 12m ou 1-4 e pode ser usado sem custo de PA 1 vez por rodada"
            }

        ]
    },

    {
        nome: "Ops, Você Errou",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Sempre que um inimigo errar um ataque contra você sofre 1d6 de dano de Energia"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Dano aumenta para 2d6"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Dano aumenta para 3d6 e inimigos recebem -2 por ataque errado durante 1 rodada"
            }

        ]
    },

    {
        nome: "Ataque em Cadeia",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Ao acertar um ataque pode dividir o dano entre até 2 alvos a até 3m entre si"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Pode atingir até 3 alvos e alcance entre eles aumenta para 6m"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Pode atingir até 5 alvos sem dividir igualmente o dano e aplica Confusão ao atingir 5 alvos"
            }

        ]
    },

    {
        nome: "Duplicata Elétrica",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Cria duplicata a até 3m com 1 PV que conta como alvo válido"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Pode manter até 2 duplicatas e elas explodem causando 1d6 de Energia em 3m"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Pode manter até 3 duplicatas e teleportar para elas como reação"
            }

        ]
    },

    {
        nome: "Tempestade Viva",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Cria tempestade de 6m por 1d4 rodadas causando efeitos aleatórios"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Área aumenta para 9m e efeitos da tempestade são aprimorados"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Tempestade cobre a cena inteira e você escolhe os efeitos"
            }

        ]
    },

    {
        nome: "Acúmulo de Carga",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Ao causar dano ganha cargas até limite da AGI causando 1d8 por carga ao atingir o máximo"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Limite de cargas aumenta para AGI x2"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Pode consumir todas as cargas causando 1d10+2 por carga"
            }

        ]
    },

    {
        nome: "Reflexos Sobrenaturais",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "+5 em Reflexos"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Após esquivar sua próxima esquiva não consome PA"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "+1 PA permanente"
            }

        ]
    },

    {
        nome: "Descarga Rápida",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Como reação causa 2d6 de dano de Energia ao redor"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Ataques causam +1d6 de dano de Energia"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Reação aumenta para 3d8+5 de dano de Energia"
            }

        ]
    },

    {
        nome: "Corpo Fantasma",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Ao se esquivar recebe RD 5 por 2 rodadas"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "+5 contra agarrar e imobilizar"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Pode atravessar criaturas e recebe RD 10 ao esquivar"
            }

        ]
    },

    {
        nome: "Aceleração",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Recebe 1 PA temporário a cada 3 rodadas"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Recebe 1 PA temporário no início da cena"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Pode realizar 1 ataque extra sem custo de PA a cada 4 rodadas"
            }

        ]
    },

    {
        nome: "Instabilidade",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Role 1d8 e receba efeitos aleatórios de sorte ou azar"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Agora rola 1d12 com novos efeitos positivos"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Recebe apenas efeitos positivos ao usar a habilidade"
            }

        ]
    },

    {
        nome: "Aprimorar",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Aprimora equipamento recebendo +3 em testes até o fim da cena"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Pode aprimorar veículos aumentando velocidade e dando +5 ao piloto"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Armas aprimoradas causam dano de Energia, +1 margem de crítico e +5 dano"
            }

        ]
    },

    {
        nome: "Fúria da Natureza",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Manipula o terreno transformando a cena em terreno difícil ou reduzindo sua complexidade"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Gastando 1 PA cria cobertura parcial"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Pode prender e imobilizar inimigos causando 3d10 de dano por rodada"
            }

        ]
    },

    {
        nome: "Fragmentado",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Pode trocar de mente com um marcado morto até o fim da cena"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Reduz custo da troca para 2 PA"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Pode trocar livremente gastando apenas 4 PD"
            }

        ]
    },

    {
        nome: "Imunidade",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "RD 5 contra dano mundano e Energia"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "RD 10 e ao sofrer dano de Energia recebe +5 RD por 1 rodada"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Imune a dano de fogo"
            }

        ]
    },

    {
        nome: "Piromaníaco",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Ataques básicos causam dano de fogo"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Ataques aplicam Chamas ao acertar ou sofrer ataques"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Sempre que aplicar Chamas recupera 1 PD"
            }

        ]
    },

    {
        nome: "Magneto Wow",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Armas corpo a corpo recebem +1 alcance"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Pode reduzir dano balístico à metade como reação"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Sua arma alcança qualquer distância"
            }

        ]
    },

    {
        nome: "Pele Refletora",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Ao sofrer dano devolve 5 ao atacante"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Dano refletido aumenta em 10"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Recebe 25 PV temporários no início da cena"
            }

        ]
    },

    {
        nome: "Mini Anfitrião",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Recebe 10 PD temporários no início da cena"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "No início da rodada role 1d4 para receber bônus ou perder PD"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Mini anfitrião pode tomar ataques no seu lugar e concede RD 10 Energia"
            }

        ]
    },

    {
        nome: "Olhar Onisciente",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "1 PA +3 PD para descobrir PV, PD ou Resistências do alvo"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Descobre até 2 informações incluindo atributos"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Descobre até 4 informações do alvo"
            }

        ]
    },

    {
        nome: "Dominar Mente",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "2 PA +4 PD. Falha em Vontade deixa alvo Controlado até próximo turno"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Controle dura 1 rodada e sucesso deixa Traumatizado"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "DT +5 e sucesso deixa Confuso"
            }

        ]
    },

    {
        nome: "Domínio da Mente",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Cria área mental de 9m impedindo saída voluntária por 1d4 rodadas"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Área aumenta para 12m e duração vira 1d4+2"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Escolhe bônus de Defesa, Ataque, Controle, Sorte ou Cura na área"
            }

        ]
    },

    {
        nome: "Barreira Justa",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "RD 10 contra dano mundano"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "RD dobra no início da cena mas perde 5 por rodada"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "RD triplica no início da cena mas perde 4 por rodada"
            }

        ]
    },

    {
        nome: "Mente Analítica",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "1 vez por rodada adiciona +5 ou -5 em um teste"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Pode usar 2 vezes por rodada e afeta dano"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "1 vez por cena transforma teste em sucesso ou falha automática"
            }

        ]
    },

    {
        nome: "Visão Além",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Enxerga invisíveis e recebe +5 em Percepção"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "1 PA para descobrir próxima ação do alvo"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Ignora Furtividade e não pode ficar Desprevenido"
            }

        ]
    },

    {
        nome: "Sobrecarga Cognitiva",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "1 PA +3 PD reduz INT e PRE do alvo por 1d4 rodadas"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Falha deixa Confuso"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Falha deixa Paralisado por 1 rodada"
            }

        ]
    },

    {
        nome: "Biblioteca Viva",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Pode usar qualquer perícia como treinado"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "+5 em perícias baseadas em INT"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "1 vez a cada 4 rodadas trata teste como 20 natural"
            }

        ]
    },

    {
        nome: "Paradoxo Vivo",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Falhar em um teste concede +2 cumulativo no próximo"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Bônus aumenta para +4"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Após 3 falhas o próximo teste vira sucesso automático"
            }

        ]
    },

    {
        nome: "Identidade Fragmentada",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "+5 contra efeitos mentais"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Imune a Confusão"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Inimigos recebem -5 para afetar você mentalmente"
            }

        ]
    },

        {
        nome: "Palavra Absoluta",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Ação padrão +4 PD para dar ordem simples ao alvo"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Pode emitir ordens complexas"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Afeta múltiplos alvos"
            }

        ]
    },

    {
        nome: "Arquivo Vivo",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Registra habilidades vistas e ganha +5 para resistir"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Pode usar como reação e bônus aumenta para +10"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "1 vez por cena reproduz versão reduzida da habilidade registrada"
            }

        ]
    },

    {
        nome: "Pensamento Acelerado",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "A cada 2 rodadas faz teste de INT sem gastar PA"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 10,
                descricao:
                "Identifica fraquezas e recebe +2 contra o alvo"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Ao passar no teste recebe +1 PA"
            }

        ]
    },

    {
        nome: "Falha na Percepção",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Inimigos recebem -2 ao atacar você"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Penalidade aumenta para -5"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Se errarem ficam Desprevenidos"
            }

        ]
    },

    {
        nome: "Reescrever Ação",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Reação 1 PA +3 PD muda o alvo de uma ação inimiga"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Também altera posição final da ação"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "1 vez por cena cancela completamente uma ação"
            }

        ]
    },

    {
        nome: "Desconexão Mental",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "RD 5 contra dano mental"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "RD 10 contra dano mental e +5 em Vontade"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Imune a leitura mental"
            }

        ]
    },

    {
        nome: "Conexão",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "2 PA para compartilhar PD com aliado adjacente"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Conexão alcança até 2 posições"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Conectados ficam imunes a Controlado e recebem +5 Vontade"
            }

        ]
    },

    {
        nome: "Equilibrar",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Sofre -5 em defesa ou testes para aplicar igual ao alvo"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Penalidade aumenta para -10"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Pode compartilhar redução de dano ou penalidade de atributo"
            }

        ]
    },

    {
        nome: "Acordo",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 4,
                descricao:
                "Cria acordo paranormal impossível de quebrar sem consequência"
            },

            {
                nivel: "EVOLUÇÃO I",
                custo: 8,
                descricao:
                "Cria campo isolado entre você e o alvo"
            },

            {
                nivel: "EVOLUÇÃO II",
                custo: 12,
                descricao:
                "Quem quebrar o acordo vira seu fantoche até morrer"
            }

        ]
    },

    {
        nome: "Segunda Forma",

        evolucoes: [

            {
                nivel: "BASE",
                custo: 15,
                descricao:
                "Ao ficar abaixo de 33% PV entra em forma paranormal com +5 ataque, +10 dano, RD 15 e regeneração"
            }

        ]
    },

]
    





// ======================================
// MENU
// ======================================

function openAssimilationMenu(){

    let html = "";

    assimilations.forEach(a => {

        html += `

            <div
                class="assimilation-option"
                onclick="selectAssimilation('${a.nome}')"
            >

                <h3>${a.nome}</h3>

            </div>

        `;

    });

    const menu = document.createElement("div");

    menu.classList.add("assimilation-menu");

    menu.innerHTML = `

        <div class="assimilation-menu-content">

            <div class="menu-header">

                <h2>ASSIMILAÇÕES</h2>

                <button onclick="closeMenu()">
                    X
                </button>

            </div>

            ${html}

        </div>

    `;

    document.body.appendChild(menu);

}

// ======================================
// FECHAR MENU
// ======================================

function closeMenu(){

    const menu =
        document.querySelector(".assimilation-menu");

    if(menu){

        menu.remove();

    }

}

// ======================================
// SELECIONAR
// ======================================

function selectAssimilation(nome){

    const assimilation =
        assimilations.find(a => a.nome === nome);

    if(!assimilation) return;

    createAssimilationCard(assimilation);

    closeMenu();

}

// ======================================
// CRIAR CARD
// ======================================

function createAssimilationCard(assimilation){

    const evo =
        assimilation.evolucoes[0];

    const card =
        document.createElement("div");

    card.classList.add("assimilation-card");

    card.dataset.nome =
        assimilation.nome;

    card.dataset.level = 0;

    card.innerHTML = `

        <div class="assimilation-header">

            <div>

                <h3>
                    ${assimilation.nome}
                </h3>

                <small class="assimilation-level">
                    ${evo.nivel}
                </small>

            </div>

            <button onclick="removeAssimilation(this)">
                X
            </button>

        </div>

        <div class="assimilation-description">

            ${evo.descricao}

        </div>

        <div class="assimilation-cost">

            Custo:
            <span class="assimilation-pv">
                ${evo.custo}
            </span>
            PV

        </div>

    `;

    // =========================
    // EVOLUIR AO CLICAR
    // =========================

    card.addEventListener("click", function(e){

        if(e.target.tagName === "BUTTON") return;

        evolveAssimilation(this);

    });

    document.getElementById("assimilationList")
    .appendChild(card);

    

}

// ======================================
// EVOLUIR
// ======================================

function evolveAssimilation(card){

    let level =
        Number(card.dataset.level);

    const nome =
        card.dataset.nome;

    const assimilation =
        assimilations.find(a => a.nome === nome);

    if(!assimilation) return;

    // =========================
    // LIMITE
    // =========================

    if(level >= 2) return;

    level++;

    card.dataset.level = level;

    const evo =
        assimilation.evolucoes[level];

    card.querySelector(".assimilation-level")
    .innerText = evo.nivel;

    card.querySelector(".assimilation-description")
    .innerText = evo.descricao;

    card.querySelector(".assimilation-pv")
    .innerText = evo.custo;

    

}

// ======================================
// REMOVER
// ======================================

function removeAssimilation(button){

    button.closest(".assimilation-card")
    .remove();

    

}

// ======================================
// BOTÃO
// ======================================

const assimilationBtn =
    document.getElementById("assimilationBtn");

if(assimilationBtn){

    assimilationBtn.addEventListener(
        "click",
        openAssimilationMenu
    );

}

const assimilationObserver =
new MutationObserver(() => {

    atualizarStatus();

});

assimilationObserver.observe(

    document.getElementById("assimilationList"),

    {
        childList: true,
        subtree: true,
        characterData: true
    }

);