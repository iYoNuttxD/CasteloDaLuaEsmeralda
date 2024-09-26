let life = 100 
let coin = 0 
let weapon = 0 
let gstart = 0 
let potion = 0 
let home = 0 
let man = 0 
let enemylife = 100 
let vorthul = 0 
let run = -1 
let key = 0 
let swamp = 0 
let tree = 0 
let cheast = 0 
let bosslife = 200

const avname0 = document.getElementById('avname')

const gameinfo = document.getElementById('gameinfo')
const gamecoin = document.getElementById('gamecoin')
const gamelife = document.getElementById('gamelife')
const gameEinfo = document.getElementById('gameEinfo')

const gameEdamage = document.getElementById('gameEdamage')
const gameElife = document.getElementById('gameElife')
const gameEname = document.getElementById('gameEname')

const gametext = document.getElementById('gametext')
const gamebutton = document.getElementById('gamebutton')
const gameimg = document.getElementById('gameimg')
const gametitle = document.getElementById('gametitle')

const gamedialog1 = document.getElementById("gamedialog1")
const gamedialog2 = document.getElementById("gamedialog2")
const gamedialog3 = document.getElementById("gamedialog3")
const gamedialog4 = document.getElementById("gamedialog4")

const gameweapon1 = document.getElementById('gameweapon1')
const gameweapon2 = document.getElementById('gameweapon2')
const gameweapon3 = document.getElementById('gameweapon3')

const gamepotion = document.getElementById('gamepotion')
const gameshield = document.getElementById('gameshield')

const gamedrink1 = document.getElementById('gamedrink1')
const gamedrink2 = document.getElementById('gamedrink2')
const gamedrink3 = document.getElementById('gamedrink3')

const gamestart0 = document.getElementById('gamestart0')
const gamestart1 = document.getElementById('gamestart1')
const gamestart01 = document.getElementById('gamestart01')
const gamestart2 = document.getElementById('gamestart2')
const gamestart3 = document.getElementById('gamestart3')

const gameend1 = document.getElementById('gameend1')
const gameend2 = document.getElementById('gameend2')
const gameend3 = document.getElementById('gameend3')

const gamerestart = document.getElementById('gamerestart')
const gamereturn = document.getElementById('gamereturn')

const gamefight1 = document.getElementById('gamefight1')
const gamefight2 = document.getElementById('gamefight2')
const gamefight0 = document.getElementById('gamefight0')
const gamerun1 = document.getElementById('gamerun1')

const gameswamp = document.getElementById('gameswamp')

const gameeat = document.getElementById('gameeat')

const gamekey = document.getElementById('gamekey')
const gamecheast = document.getElementById('gamecheast')

const gamenorth = document.getElementById('gamenorth')
const gamesouth = document.getElementById('gamesouth')
const gameeast = document.getElementById('gameeast')
const gamewest = document.getElementById('gamewest')

if (document.getElementById('avname').style.display !== 'none') {
    document.getElementById('avname').focus()
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      if (gamestart1.style.display == 'inline'){
        gamestart1.click()
      } else if (gamestart2.style.display == 'inline'){
        gamestart2.click()
      } else if (gamereturn.style.display == 'inline'){
        gamereturn.click()
      } else if (gamestart3.style.display == 'inline'){
        gamestart3.click()
      }
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        if (gamestart01.style.display == 'inline'){
            gamestart01.click()
        } else if (gamedialog1.style.display == 'inline') {
            gamedialog1.click()
        } else if (gamedialog2.style.display == 'inline') {
            gamedialog2.click()
        } else if (gamedialog3.style.display == 'inline') {
            gamedialog3.click()
        } else if (gamerestart.style.display == 'inline'){
            gamerestart.click()
        } else if (gamedialog4.style.display == 'inline'){
            gamedialog4.click()
        } else if (gameeat.style.display == 'inline'){
            gameeat.click()
        } else if (gamefight0.style.display == 'inline'){
            gamefight0.click()
        } else if (gameswamp.style.display == 'inline'){
            gameswamp.click()
        } else if (gamekey.style.display == 'inline'){
            gamekey.click()
        } else if (gamecheast.style.display == 'inline'){
            gamecheast.click()
        } else if (gamebutton.style.display !== 'none'){
            gamebutton.click()
        }
    }
})

document.addEventListener('keydown', function(event) {
    if (event.shiftKey) {
        if (gameend1.style.display == 'inline'){
            gameend1.click()
        } else if (gameend2.style.display == 'inline') {
            gameend2.click()
        } else if (gameend3.style.display == 'inline'){
            gameend3.click()
        } else if (gamerun1.style.display == 'inline'){
            gamerun1.click()
        }
    }
  })

document.addEventListener('keydown', function(event) {
    if (event.key === '1') {
        if (gameweapon1.style.display == 'inline'){
            gameweapon1.click()
        } else if (gamepotion.style.display == 'inline') {
            gamepotion.click()
        } else if (gamedrink1.style.display == 'inline') {
            gamedrink1.click()
        } 
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === '2') {
        if (gameweapon2.style.display == 'inline'){
            gameweapon2.click()
        } else if (gameshield.style.display == 'inline'){
            gameshield.click()
        } else if (gamedrink2.style.display == 'inline') {
            gamedrink2.click()
        }
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === '3') {
        if (gameweapon3.style.display == 'inline'){
            gameweapon3.click()
        } else if (gamedrink3.style.display == 'inline') {
            gamedrink3.click()
        }
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
      if (gamefight1.style.display == 'inline'){
        gamefight1.click()
      }
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'v') {
      if (gamefight2.style.display == 'inline'){
        gamefight2.click()
      }
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'w') {
      if (gamenorth.style.display == 'inline'){
        gamenorth.click()
      }
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === 's') {
      if (gamesouth.style.display == 'inline'){
        gamesouth.click()
      }
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
      if (gamewest.style.display == 'inline'){
        gamewest.click()
      }
    }
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
      if (gameeast.style.display == 'inline'){
        gameeast.click()
      }
    }
})

function avname() {
    let name = document.getElementById('avname').value
    if (name.length > 0 && name.length <= 15) {
        gamename.innerHTML= `Aventureiro: ${name}`
        avname0.style.display = 'none'
        gamebutton.style.display = 'none'
        gametext.innerText = `Olá ${name}! Um grande aventureiro precisa de uma arma!`
        gameweapon1.style.display ='inline'
        gameweapon2.style.display ='inline'
    } else if (name.length > 15) {
        window.alert("Limite de Caracteres Excedido!")
    } else {
        window.alert('Não é possível preencher o nome em branco!')
    }
}

function avweapon(weapon0) {
    if (weapon0 === 1) {
        gamename.innerText += ' /E.A.F'
        weapon = 1
        life = 110
        gamelife.innerText = 'Vida: 110'
        gamelife.style.color = "rgb(115, 177, 198)"
        gameweapon1.style.display = 'none'
        gameweapon2.style.display = 'none'
        avstart(0)
        gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
    } else if (weapon0 === 2) {
        gamename.innerText += ' /C.C.F'
        weapon = 2
        coin = 50
        gamecoin.innerText = 'Moeda: 50'
        gamecoin.style.color = 'rgb(186, 170, 51)'
        gameweapon1.style.display = 'none'
        gameweapon2.style.display = 'none'
        avstart(0)
        gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 181, 49, 0.8), 10px 0px 20px 0px rgba(255, 255, 0, 0.8)'
    }
}

function avstore(item) {
    let name = document.getElementById('avname').value
    let gamenameElement = document.getElementById('gamename')
    let gamename = gamenameElement.innerText
    if (item === 1) {
        if (coin >= 20) {
            potion += 1
            coin -= 20
            if (gamename.includes( " /1.P")) {
                gamename = gamename.replace(" /1.P", " /2.P")
            } else if (gamename.includes( " /2.P")) {
                gamename = gamename.replace(" /2.P", " /3.P")
            } else if (gamename.includes( " /3.P")) {
                gamename = gamename.replace(" /3.P", " /4.P")
            } else if (gamename.includes( " /4.P")) {
                gamename = gamename.replace(" /4.P", " /5.P")
            } else {
                gamename += ' /1.P'
            }
            gamenameElement.innerText = gamename
            gametext.innerText = 'Você compra uma poção! A Poção de Cural Vital. Ela pode curar até 30 de vida do usuário.'
            if (coin === 0) {
                gamecoin.innerText = 'Moeda: 0'
                gamecoin.style.color = 'rgb(185, 50, 50)'
                if (life === 100) {
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 181, 49, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                } else {
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                }
            } else {
                gamecoin.innerText = `Moeda: ${coin}`
                gamecoin.style.color = 'rgb(186, 170, 51)'
                if (life === 100) {
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 181, 49, 0.8), 10px 0px 20px 0px rgba(255, 255, 0, 0.8)'
                } else {
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 49, 181, 0.8), 10px 0px 20px 0px rgba(255, 255, 0, 0.8)'
                }
            }   
        } else {
            window.alert('Você não tem moedas suficientes!')
        }
    } else if (item === 2) {
        if (coin >= 30) {
            life += 20
            coin -= 30
            gamecoin.innerText = `Moeda: ${coin}`
            gamelife.innerText = `Vida: ${life}`
            gamelife.style.color = "rgb(115, 177, 198)"
            gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 255, 0, 0.8)'
            gametext.innerText = 'Você compra um novo escudo! O Escudo de Ônix. Ela pode defender até 20 de dano do inimigo.'
            if (coin === 0) {
                gamecoin.style.color = 'rgb(185, 50, 50)'
                gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
            }
        } else {
            window.alert('Você não tem moedas suficientes!')
        }
    } else if (item === 3) {
        if (coin >= 50) {
            weapon = 3
            coin -= 50
            gamenameElement.innerText = gamename.replace(/\/E\.A\.F|\/C\.C\.F/g, "/L.D.E")
            gameweapon3.style.display = 'none'
            gametext.innerText = 'Você compra uma nova arma! A Lâmina do Destino Eterno. A poderosa arma causa 12 de dano ao inimigo.'
            if (coin === 0) {
                gamename.innerText = `Aventureiro: ${name} /L.D.E`
                gamecoin.innerText = 'Moeda: 0'
                gamecoin.style.color = 'rgb(185, 50, 50)'
                gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 181, 49, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
            }
        } else {
            window.alert('Você não tem moedas suficientes!')
        }
    }
}

function avtavern(item) {
    if (item === 1 ) {
        if (coin >= 15) {
            life += 10
            coin -= 15
            gamelife.innerText = `Vida: ${life}`
            gametext.innerText = 'Você toma um Elixir Guardião. O Seu corpo se torna um pouco mais resistente.'
            if (coin === 0) {
                gamecoin.innerText = 'Moeda: 0'
                gamecoin.style.color = 'rgb(185, 50, 50)'
                gamelife.style.color = "rgb(115, 177, 198)"
                gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
            } else {
                gamecoin.innerText = `Moeda: ${coin}`
                gamelife.style.color = "rgb(115, 177, 198)"
                gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 49, 181, 0.8), 10px 0px 20px 0px rgba(255, 255, 0, 0.8)'
            }
        } else {
            window.alert('Você não tem moedas suficientes!')
        }
    } else if (item === 2) {
        if (life >= 100) {
            window.alert('Você já tem o máximo de vida!')
        } else {
            if (coin >= 10) {
                life += 10
                coin -= 10
                gamelife.innerText = `Vida: ${life}`
                gametext.innerText = 'Você toma Néctar da Revigoração. O Seu corpo se sente um pouco melhor.'
                if (coin === 0) {
                    gamecoin.innerText = 'Moeda: 0'
                    gamecoin.style.color = 'rgb(185, 50, 50)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 181, 49, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                } else {
                    gamecoin.innerText = `Moeda: ${coin}`
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 181, 49, 0.8), 10px 0px 20px 0px rgba(255, 255, 0, 0.8)'
                }
            } else {
                window.alert('Você não tem moedas suficientes!')
            }
        }
    } else if (item === 3) {
        if (coin >= 25) {
            let name = document.getElementById('avname').value
            coin = 0
            gamedrink1.style.display = 'none'
            gamedrink2.style.display = 'none'
            gamedrink3.style.display = 'none'
            gamecoin.innerText = `Moeda: ${coin}`
            gamecoin.style.color = 'rgb(185, 50, 50)'
            gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 181, 49, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
            weapon = 0
            gamename.innerText = `Aventureiro: ${name}`
            gamedialog1.style.display = 'none'
            gameimg.setAttribute('src', '../Imagens/preto.png')
            gameimg.style.border = 'none'
            gametitle.innerText = '????'
            gametext.innerText = 'A bebida mistériosa lhe deixa desacordado. Bandidos roubam seus pertences. Você não tem mais nada.'
        } else {
            window.alert('Você não tem moedas suficientes!')
        }
    }
}

function avend(end) {
    if (end === 1) {
        gamestart01.style.display = 'none'
        gametitle.style.display = 'none'
        gametext.innerText = 'Um aventureiro com medo de uma missão? Você é uma decepção como aventureiro...'
        gameimg.setAttribute('src', '../Imagens/gameover.jpg')
        gameimg.style.border = 'none'
        gamestart0.style.display = 'none'
        gameend1.style.display = 'none'
        gamestart1.style.display = 'none'
        gamerestart.style.display = 'inline'
        gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(255, 0, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
    } else if (end === 2) {
        gametitle.style.display = 'none'
        gametext.innerText = 'Você se tremeu de medo após descobrir a verdade de sua jornada. Aventureiros deveriam sentir medo?'
        gameimg.setAttribute('src', '../Imagens/gameover.jpg')
        gameimg.style.border = 'none'
        gamestart1.style.display = 'none'
        gameend2.style.display = 'none'
        gamerestart.style.display = 'inline'
        gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(255, 0, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
    } else if (end === 3) {
        gametitle.style.display = 'none'
        gamedialog4.style.display = 'none'
        gametext.innerText = 'Você prefirou passar um tempo com sua familía do que arriscar sua vida. Aventureiros deveriam sentir medo?'
        gameimg.setAttribute('src', '../Imagens/gameover.jpg')
        gameimg.style.border = 'none'
        gameend3.style.display = 'none'
        gamerestart.style.display = 'inline'
        gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(255, 0, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
    } else if (end === 4) {
        gametitle.style.display = 'none'
        gameEinfo.style.display = 'none'
        gametext.innerText = "Você foi derrotado pelo Vor'thul, o Devorador de Sonhos. Sua jornada de acaba aqui."
        gameimg.setAttribute('src', '../Imagens/gameover.jpg')
        gameimg.style.border = 'none'
        gameend3.style.display = 'none'
        gamerestart.style.display = 'inline'
        gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(255, 0, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
        gamefight1.style.display = 'none'
        gamefight2.style.display = 'none'
    } else if (end === 5) {
        gametitle.style.display = 'none'
        gameEinfo.style.display = 'none'
        gametext.innerText = "Você tenta correr do temível Vor'thul, o Devorador de Sonhos. Porém ele te ataca pelas costas e você é derrotado. Aventureiros deveriam sentir medo?"
        gameimg.setAttribute('src', '../Imagens/gameover.jpg')
        gameimg.style.border = 'none'
        gameend3.style.display = 'none'
        gamerestart.style.display = 'inline'
        gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(255, 0, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
        gamefight1.style.display = 'none'
        gamefight2.style.display = 'none'
        gamerun1.style.display = 'none'
    } else if (end === 6) {
        gametitle.style.display = 'none'
        gameEinfo.style.display = 'none'
        gametext.innerText = "Você acessa o primeiro salão que vê. Quando o primeiro passo é dado, espinhos são disparados do teto. Você é assasinado brutalmente pela armadilha."
        gameimg.setAttribute('src', '../Imagens/gameover.jpg')
        gameimg.style.border = 'none'
        gameend3.style.display = 'none'
        gamerestart.style.display = 'inline'
        gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(255, 0, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
        gamefight1.style.display = 'none'
        gamefight2.style.display = 'none'
        gamerun1.style.display = 'none'
        gamenorth.style.display = 'none'
        gamesouth.style.display = 'none'
        gamewest.style.display = 'none'
        gameeast.style.display = 'none'
        gamelife.innerText = 'Vida: 0'
    } else if (end === 7) {
        gametitle.style.display = 'none'
        gameEinfo.style.display = 'none'
        gametext.innerText = "Você é eliminado pela Esmaralda, a Guardiã Lunar. Você não foi capaz de terminar sua missão no final."
        gameimg.setAttribute('src', '../Imagens/gameover.jpg')
        gameimg.style.border = 'none'
        gameend3.style.display = 'none'
        gamerestart.style.display = 'inline'
        gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(255, 0, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
        gamefight1.style.display = 'none'
        gamefight2.style.display = 'none'
        gamerun1.style.display = 'none'
        gamenorth.style.display = 'none'
        gamesouth.style.display = 'none'
        gamewest.style.display = 'none'
        gameeast.style.display = 'none'
        gamelife.innerText = 'Vida: 0'
    }
}

function avstart(start) {
    if (start === 0) {
        gametext.innerText = 'Sua aventura começa na Taberna do Dragão Dourado! No pequeno Vale de Dragorin. Um homem lhe oferta uma missão: Ir ao Castelo da Lua Esmeralda e eliminar o guardião que lá mora. Você aceita a proposta? '
        gamestart01.style.display = 'inline'
        gameend1.style.display = 'inline'
        gamestart0.style.display = 'none'
    } else if (start === 1) {
        gametitle.innerText = 'Centro do Vale de Dragorin'
        gstart = 1
        gamestart01.style.display = 'none'
        gameend1.style.display = 'none'
        gamestart1.style.display = 'none'
        gamenorth.style.display = 'inline'
        gamesouth.style.display = 'inline'
        gamewest.style.display = 'inline'
        gameeast.style.display = 'inline'
        gameweapon3.style.display = 'none'
        gamepotion.style.display = 'none'
        gameshield.style.display = 'none'
        gamedialog1.style.display = 'none'
        gamedialog2.style.display = 'none'
        gamedialog3.style.display = 'none'
        gameend2.style.display = 'none'
        gamedrink1.style.display = 'none'
        gamedrink2.style.display = 'none'
        gamedrink3.style.display = 'none'
        gameimg.style.border = '3px solid rgb(232, 135, 45)'
        gameimg.setAttribute('src', '../Imagens/centro.jpg')
        gametext.innerText = 'Com a proposta aceita, você se direciona ao centro do Vale. Ao norte, iniciará sua jornada ao Castelo, porém ainda existe lugares à se visitar!'
    } else if (start === 2) {
        gstart = 2
        gamefight1.style.display = 'none'
        gamerun1.style.display = 'none'
        gamefight2.style.display = 'none'
        gamestart2.style.display = 'none'
        gamenorth.style.display = 'inline'
        gamesouth.style.display = 'inline'
        gamewest.style.display = 'inline'
        gameeast.style.display = 'inline' 
        gameEinfo.style.display = 'none'
        gameeat.style.display = 'none'
        gamekey.style.display = 'none'
        gameswamp.style.display = 'none'
        gametitle.innerText = 'Floresta das Almas Ancestrais'
        gameimg.setAttribute('src', '../Imagens/floresta.jpg')
        gameimg.style.border = '3px solid rgb(23, 117, 36)'
        gametext.innerText = 'Você atravesa os portões do Vale de Dragorin. Agora você está sozinho no meio da Floresta das Almas Ancestrais, o caminho do castelo é desconhecido. Apenas uma bússola poderá lhe auxiliar.'
    } else if (start === 3) {
        gstart = 3
        gamefight1.style.display = 'none'
        gamerun1.style.display = 'none'
        gamefight2.style.display = 'none'
        gamestart2.style.display = 'none'
        gamenorth.style.display = 'inline'
        gamesouth.style.display = 'inline'
        gamewest.style.display = 'inline'
        gameeast.style.display = 'inline' 
        gameEinfo.style.display = 'none'
        gamestart3.style.display = 'none'
        gamecheast.style.display = 'none'
        gametitle.innerText = 'Castelo da Lua Esmeralda'
        gameimg.setAttribute('src', '../Imagens/castelo.jpg')
        gameimg.style.border = '3px solid rgb(99, 84, 84)'
        gametext.innerText = 'Você finalmente chega no Castelo da Lua Esmeralda. O seu corpo começa a suar frio, como se soubesse que o fim está próximo. Você começa a explorar o local.'
    }
}

function avposition(position) {
    if (gstart === 1){
        if (position === 1) {
            avstart(2)
        } else if (position === 2) {
            if (home === 0) {
                home = 1
                let name = document.getElementById('avname').value
                gametitle.innerText = `Casa de ${name}`
                gamedialog4.style.display = 'inline'
                gameimg.setAttribute('src', '../Imagens/casa.jpg')
                gametext.innerText = 'Você entra em sua casa e sua mãe estava lhe esperando. Você diz a ela que partirá numa missão perigosa. Sua mãe pede para que repense sua decisão.'
                gamenorth.style.display = 'none'
                gamesouth.style.display = 'none'
                gamewest.style.display = 'none'
                gameeast.style.display = 'none'
                gameend3.style.display = 'inline'
            } else {
                window.alert('Você ja tomou sua decisão. Voltar lá fará sua mãe sofrer mais ainda.')
            }
        } else if (position === 3) {
            if (coin === 0) {
                if (man === 0) {
                    gametitle.innerText = 'Taberna do Dragão Dourado'
                    gameimg.setAttribute('src', '../Imagens/taverna.jpg')
                    gametext.innerText = 'Você entra na taberna, porém está sem dinheiro para desfrutar uma bebida. Mas o homem misterioso lhe convoca.'
                    gamestart1.style.display = 'inline'
                    gamenorth.style.display = 'none'
                    gamesouth.style.display = 'none'
                    gamewest.style.display = 'none'
                    gameeast.style.display = 'none'
                    gamedialog1.style.display = 'inline'
                    gamereturn.style.display = 'none'
                } else {
                    gamedialog1.style.display = 'none'
                    gamedialog2.style.display = 'none'
                    gamedialog3.style.display = 'none'
                    gameend2.style.display = 'none'
                    gametitle.innerText = 'Taberna do Dragão Dourado'
                    gameimg.setAttribute('src', '../Imagens/taverna.jpg')
                    gametext.innerText = 'Você entra na taberna, porém está sem dinheiro para desfrutar uma bebida. O homem misterioso não está mais lá.'
                    gamestart1.style.display = 'inline'
                    gamenorth.style.display = 'none'
                    gamesouth.style.display = 'none'
                    gamewest.style.display = 'none'
                    gameeast.style.display = 'none'
                    gamerestart.style.display = 'none'
                    gamereturn.style.display = 'none'
                }
            } else {
                if (man === 0) {
                    gametitle.innerText = 'Taberna do Dragão Dourado'
                    gameimg.setAttribute('src', '../Imagens/taverna.jpg')
                    gametext.innerText = 'Você entra na taberna, o barman exibe sua coleção de bebidas exóticas. Porém o homem misterioso lhe convoca.'
                    gamestart1.style.display = 'inline'
                    gamenorth.style.display = 'none'
                    gamesouth.style.display = 'none'
                    gamewest.style.display = 'none'
                    gameeast.style.display = 'none'
                    gamedrink1.style.display = 'inline'
                    gamedrink2.style.display = 'inline'
                    gamedrink3.style.display = 'inline'
                    gamedialog1.style.display = 'inline'
                    gamereturn.style.display = 'none'
                } else {
                    gamedialog1.style.display = 'none'
                    gamedialog2.style.display = 'none'
                    gamedialog3.style.display = 'none'
                    gameend2.style.display = 'none'
                    gametitle.innerText = 'Taberna do Dragão Dourado'
                    gameimg.setAttribute('src', '../Imagens/taverna.jpg')
                    gametext.innerText = 'Você entra na taberna, o barman exibe sua coleção de bebidas exóticas. Mas o homem misterioso não está mais lá.'
                    gamestart1.style.display = 'inline'
                    gamenorth.style.display = 'none'
                    gamesouth.style.display = 'none'
                    gamewest.style.display = 'none'
                    gameeast.style.display = 'none'
                    gamedrink1.style.display = 'inline'
                    gamedrink2.style.display = 'inline'
                    gamedrink3.style.display = 'inline'
                    gamereturn.style.display = 'none'
                }
            }
        } else if (position === 4) {
            if (coin === 0) {
                gametitle.innerText = 'Loja do Thorian'
                gameimg.setAttribute('src', '../Imagens/loja.jpg')
                gametext.innerText = 'Você entra na Loja do Thorian, mas como você não tem moeda, fica apenas admirando.'
                gamestart1.style.display = 'inline'
                gamenorth.style.display = 'none'
                gamesouth.style.display = 'none'
                gamewest.style.display = 'none'
                gameeast.style.display = 'none'
            } else {
                gametitle.innerText = 'Loja do Thorian'
                gameimg.setAttribute('src', '../Imagens/loja.jpg')
                gametext.innerText = 'Você entra na Loja do Thorian, e lhe ofereçe seus produtos.'
                gamestart1.style.display = 'inline'
                gamenorth.style.display = 'none'
                gamesouth.style.display = 'none'
                gamewest.style.display = 'none'
                gameeast.style.display = 'none'
                gamepotion.style.display = 'inline'
                gameshield.style.display = 'inline'
                if (weapon === 3) {
                    gameweapon3.style.display = 'none'
                } else {
                    gameweapon3.style.display = 'inline'
                }
            }
        }
    } else if (gstart === 2) {
        if (position === 1) {
            if (vorthul === 0) {
                gamerun1.style.display = 'inline'
                gamefight0.style.display = 'inline'
                gameEinfo.style.display = 'block'
                gameimg.setAttribute('src', '../Imagens/enemey.jpg')
                gametext.innerText = "Você segue em linha reta e encontra uma criatura, Vor'thul, o Devorador de Sonhos. Você pode tentar enfretar-lo ou tentar fugir."
                gamenorth.style.display = 'none'
                gamesouth.style.display = 'none'
                gamewest.style.display = 'none'
                gameeast.style.display = 'none'
                if (weapon === 0) {
                    gameEdamage.innerText = 'Dano: 25'
                } else if (weapon === 1) {
                    gameEdamage.innerText = 'Dano: 7'
                } else if (weapon === 2) {
                    gameEdamage.innerText = 'Dano: 10'
                } else if (weapon === 3) {
                    gameEdamage.innerText = 'Dano: 9'
                }
            } else {
                if (swamp === 0) {
                    gametitle.innerText = 'Pântano da Serpe Sombria'
                    gameimg.setAttribute('src', '../Imagens/pantano.jpg')
                    gametext.innerText = "Você contínua para norte após eliminar Vor'thul. Ao fim do caminho, um pântano surge. Não há possibilidade de continuar por essa caminho, porém você encontra uma chave dourada beirando o lago. "
                    gamenorth.style.display = 'none'
                    gamesouth.style.display = 'none'
                    gamewest.style.display = 'none'
                    gameeast.style.display = 'none'
                    gamestart2.style.display = 'inline'
                    gamekey.style.display = 'inline'
                    gameswamp.style.display = 'none'
                } else {
                    gametitle.innerText = 'Pântano da Serpe Sombria'
                    gameimg.setAttribute('src', '../Imagens/pantano.jpg')
                    gametext.innerText = "Você contínua para norte após eliminar Vor'thul. Ao fim do caminho, um pântano surge. Não há possibilidade de continuar por essa caminho."
                    gamenorth.style.display = 'none'
                    gamesouth.style.display = 'none'
                    gamewest.style.display = 'none'
                    gameeast.style.display = 'none'
                    gamestart2.style.display = 'inline'
                }
            }
        } else if (position === 2) {
            if (key === 0){
                window.alert('Os portões estão fechados. Apenas uma chave poderá abrir-lá.')
            } else {
                avstart(1)
            }
        } else if (position === 3) {
            avstart(3)
        } else if (position === 4) {
            if (tree === 0){
                gametitle.innerText = 'Árvore de Serenidade'
                gameimg.setAttribute('src', '../Imagens/floresta1.jpg')
                gametext.innerText = "Você segue o caminho para oeste. Um longo tempo depois, você encontra uma gigantesca árvore mágica bloquando os caminhos. Nela, pequenos frutos azuis estão ao seu redor."
                gamenorth.style.display = 'none'
                gamesouth.style.display = 'none'
                gamewest.style.display = 'none'
                gameeast.style.display = 'none'
                gamestart2.style.display = 'inline'
                gameeat.style.display = 'inline'
            } else {
                gametitle.innerText = 'Árvore de Serenidade'
                gameimg.setAttribute('src', '../Imagens/floresta1.jpg')
                gametext.innerText = "Você segue o caminho para oeste. Um longo tempo depois, você encontra uma gigantesca árvore mágica bloquando os caminhos. Porém, os frutos já não estão mais lá."
                gamenorth.style.display = 'none'
                gamesouth.style.display = 'none'
                gamewest.style.display = 'none'
                gameeast.style.display = 'none'
                gamestart2.style.display = 'inline'
            }
        }
    } else if (gstart === 3) {
        if (position === 1) {
            avend(6)
        } else if (position === 2) {
            avstart(2)
        } else if (position === 3) {
            if (cheast === 0){
                gameimg.setAttribute('src', '../Imagens/tesouro.jpg')
                gametext.innerText = "Você entra em um dos salão e encontra uma sala do tesouro. Você fica tentado pela ganância."
                gamenorth.style.display = 'none'
                gamesouth.style.display = 'none'
                gamewest.style.display = 'none'
                gameeast.style.display = 'none'
                gamestart3.style.display = 'inline'
                gamecheast.style.display = 'inline'
            } else {
                gameimg.setAttribute('src', '../Imagens/tesouro.jpg')
                gametext.innerText = "Você entra em um dos salão e encontra uma sala do tesouro. Porém, você já coletou os tesouros possíveis."
                gamenorth.style.display = 'none'
                gamesouth.style.display = 'none'
                gamewest.style.display = 'none'
                gameeast.style.display = 'none'
                gamestart3.style.display = 'inline'
            }

        } else if (position === 4) {
            gameElife.innerText = `Vida: ${bosslife}`
            gameEname.innerText = 'Esmaralda, a Guardiã Lunar'
            gamefight0.style.display = 'inline'
            gameEinfo.style.display = 'block'
            gameimg.setAttribute('src', '../Imagens/boss.jpg')
            gametext.innerText = "Você entra no salão principal. A porta atrás de você fecha imediatamente. Esmaralda, a Guardiã Lunar surge e lhe convoca para batalhar."
            gamenorth.style.display = 'none'
            gamesouth.style.display = 'none'
            gamewest.style.display = 'none'
            gameeast.style.display = 'none'
            if (weapon === 0) {
                gameEdamage.innerText = 'Dano: 25'
            } else if (weapon === 1) {
                gameEdamage.innerText = 'Dano: 8'
            } else if (weapon === 2) {
                gameEdamage.innerText = 'Dano: 9'
            } else if (weapon === 3) {
                gameEdamage.innerText = 'Dano: 9'
            }
        }
    }
}

function avkey() {
    key = 1
    swamp = 1
    gamekey.style.display = 'none'
    gametext.innerText = 'Você pega a chave na margem do lago denso do pântano. Parece que ela foi feita para abrir algo.'
}

function avcheast() {
    let gamenameElement = document.getElementById('gamename')
    let gamename = gamenameElement.innerText
    cheast = 1
    potion += 1
    if (gamename.includes( " /1.P")) {
        gamename = gamename.replace(" /1.P", " /2.P")
    } else if (gamename.includes( " /2.P")){
        gamename = gamename.replace(" /2.P", " /3.P")
    } else if (gamename.includes( " /3.P")) {
        gamename = gamename.replace(" /3.P", " /4.P")
    } else if (gamename.includes( " /4.P")) {
        gamename = gamename.replace(" /4.P", " /5.P")
    } else {
        gamename += ' /1.P'
    }
    gamenameElement.innerText = gamename
    coin += 25
    life += 30
    gamelife.innerText = `Vida: ${life}`
    gamecoin.innerText = `Moeda: ${coin}`
    gamelife.style.color = "rgb(115, 177, 198)"
    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 255, 0, 0.8)'
    gamecoin.style.color = 'rgb(186, 170, 51)'
    gamecheast.style.display = 'none'
    gametext.innerText = 'Você saqueia a sala do tesouro. Os espólios foram: 25 moedas, uma Poção de Cura Vital e um Escudo de Ônix Blindado.'
}

function aveat(){
    if (life >= 100) {
        tree = 1
        gamelife.innerText = `Vida: ${life}`
        gametext.innerText = "Após comer um fruto misterioso, você não sente nada de diferente."
        gameeat.style.display = 'none'
    } else {
        tree = 1
        life = 100
        gamelife.innerText = `Vida: ${life}`
        gametext.innerText = "Após comer um fruto misterioso, você se sente melhor. Sua vida regenerou ao 100%!"
        gameeat.style.display = 'none'
    }
}

function avrandom() {
    let numeroAleatorio = Math.floor(Math.random() * 2)
    run = numeroAleatorio
    avfight(3)
}


function avfight(fight) {
    if (gstart === 2) {
        gamerun1.style.display = 'none'
        gamefight0.style.display = 'none'
        gamefight1.style.display = 'inline'
        gamefight2.style.display = 'inline'
        if (fight === 1) {
            if (weapon === 0){
                enemylife -= 3
                life -= 25
                gameElife.innerText = `Vida: ${enemylife}`
                gamelife.innerText = `Vida: ${life}`
                if (life <= 100) {
                    gamelife.style.color = 'rgb(49, 181, 49)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 255, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                } else {
                    gamelife.style.color = 'rgb(115, 177, 198)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                }
                if (life <= 0) {
                    avend(4)
                } else if (enemylife <= 0){
                    let gamenameElement = document.getElementById('gamename')
                    let gamename = gamenameElement.innerText
                    if (gamename.includes( " /1.P")) {
                        gamename = gamename.replace(" /1.P", " /2.P")
                    } else if (gamename.includes( " /2.P")) {
                        gamename = gamename.replace(" /2.P", " /3.P")
                    } else if (gamename.includes( " /3.P")) {
                        gamename = gamename.replace(" /3.P", " /4.P")
                    } else if (gamename.includes( " /4.P")) {
                        gamename = gamename.replace(" /4.P", " /5.P")
                    } else {
                        gamename += ' /1.P'
                    }
                    gamenameElement.innerText = gamename
                    gametext.innerText = "Você derrota Vor'Thul após um grande esforço. Suas cinzas se transformam em 25 moedas e uma poção de cura."
                    gameElife.innerText = `Vida: 0`
                    gameElife.style.color = 'rgb(255, 0, 0)'
                    gamestart2.style.display = 'inline'
                    gamefight1.style.display = 'none'
                    gamefight2.style.display = 'none'
                    coin += 25
                    gamecoin.innerText = `Moeda: ${coin}`
                    potion += 1
                    gamenameElement.innerText = gamename
                    gamecoin.style.color = 'rgb(186, 170, 51)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 181, 49, 0.8), 10px 0px 20px 0px rgba(255, 255, 0, 0.8)'
                    gameimg.setAttribute('src', '../Imagens/.jpg')
                    vorthul = 1
                    gameswamp.style.display = 'inline'
                    gameEinfo.style.display = 'none'
                }
            } else if (weapon === 1) {
                enemylife -= 7
                life -= 7
                gameElife.innerText = `Vida: ${enemylife}`
                gamelife.innerText = `Vida: ${life}`
                gametext.innerText = "Você enfrenta Esmaralda e aplica 7 de dano. Ele contra-ataca com 7 de dano."
                if (life <= 100) {
                    gamelife.style.color = 'rgb(49, 181, 49)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 255, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                } else {
                    gamelife.style.color = 'rgb(115, 177, 198)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                }
                if (life <= 0) {
                    avend(4)
                } else if (enemylife <= 0){
                    let gamenameElement = document.getElementById('gamename')
                    let gamename = gamenameElement.innerText
                    if (gamename.includes( " /1.P")) {
                        gamename = gamename.replace(" /1.P", " /2.P")
                    } else if (gamename.includes( " /2.P")) {
                        gamename = gamename.replace(" /2.P", " /3.P")
                    } else if (gamename.includes( " /3.P")) {
                        gamename = gamename.replace(" /3.P", " /4.P")
                    } else if (gamename.includes( " /4.P")) {
                        gamename = gamename.replace(" /4.P", " /5.P")
                    } else {
                        gamename += ' /1.P'
                    }
                    gamenameElement.innerText = gamename
                    gametext.innerText = "Você derrota Vor'Thul após um grande esforço. Suas cinzas se transformam em 25 moedas e uma poção de cura."
                    gameElife.innerText = `Vida: 0`
                    gameElife.style.color = 'rgb(255, 0, 0)'
                    gamestart2.style.display = 'inline'
                    gamefight1.style.display = 'none'
                    gamefight2.style.display = 'none'
                    coin += 25
                    gamecoin.innerText = `Moeda: ${coin}`
                    potion += 1
                    gamecoin.style.color = 'rgb(186, 170, 51)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 181, 49, 0.8), 10px 0px 20px 0px rgba(255, 255, 0, 0.8)'
                    gameimg.setAttribute('src', '../Imagens/enemy.jpg')
                    vorthul = 1
                    gameswamp.style.display = 'inline'
                    gameEinfo.style.display = 'none'
                }
            } else if (weapon === 2) {
                enemylife -= 8
                life -= 10
                gameElife.innerText = `Vida: ${enemylife}`
                gamelife.innerText = `Vida: ${life}`
                gametext.innerText = "Você enfrenta Vor'thul e aplica 8 de dano. Ele contra-ataca com 10 de dano."
                if (life <= 100) {
                    gamelife.style.color = 'rgb(49, 181, 49)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 255, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                } else {
                    gamelife.style.color = 'rgb(115, 177, 198)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                }
                if (life <= 0) {
                    avend(4)
                } else if (enemylife <= 0){
                    let gamenameElement = document.getElementById('gamename')
                    let gamename = gamenameElement.innerText
                    if (gamename.includes( " /1.P")) {
                        gamename = gamename.replace(" /1.P", " /2.P")
                    } else if (gamename.includes( " /2.P")) {
                        gamename = gamename.replace(" /2.P", " /3.P")
                    } else if (gamename.includes( " /3.P")) {
                        gamename = gamename.replace(" /3.P", " /4.P")
                    } else if (gamename.includes( " /4.P")) {
                        gamename = gamename.replace(" /4.P", " /5.P")
                    } else {
                        gamename += ' /1.P'
                    }
                    gamenameElement.innerText = gamename
                    gametext.innerText = "Você derrota Vor'Thul após um grande esforço. Suas cinzas se transformam em 25 moedas e uma poção de cura."
                    gameElife.innerText = `Vida: 0`
                    gameElife.style.color = 'rgb(255, 0, 0)'
                    gamestart2.style.display = 'inline'
                    gamefight1.style.display = 'none'
                    gamefight2.style.display = 'none'
                    coin += 25
                    gamecoin.innerText = `Moeda: ${coin}`
                    potion += 1
                    gamecoin.style.color = 'rgb(186, 170, 51)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 181, 49, 0.8), 10px 0px 20px 0px rgba(255, 255, 0, 0.8)'
                    gameimg.setAttribute('src', '../Imagens/enemy.jpg')
                    vorthul = 1
                    gameswamp.style.display = 'inline'
                    gameEinfo.style.display = 'none'
                }
            } else if (weapon === 3) {
                enemylife -= 12
                life -= 9
                gametext.innerText = "Você enfrenta Vor'thul e aplica 12 de dano. Ele contra-ataca com 9 de dano."
                gameElife.innerText = `Vida: ${enemylife}`
                gamelife.innerText = `Vida: ${life}`
                if (life <= 100) {
                    gamelife.style.color = 'rgb(49, 181, 49)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 255, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                } else {
                    gamelife.style.color = 'rgb(115, 177, 198)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                }
                if (life <= 0) {
                    avend(4)
                } else if (enemylife <= 0){
                    let gamenameElement = document.getElementById('gamename')
                    let gamename = gamenameElement.innerText
                    if (gamename.includes( " /1.P")) {
                        gamename = gamename.replace(" /1.P", " /2.P")
                    } else if (gamename.includes( " /2.P")) {
                        gamename = gamename.replace(" /2.P", " /3.P")
                    } else if (gamename.includes( " /3.P")) {
                        gamename = gamename.replace(" /3.P", " /4.P")
                    } else if (gamename.includes( " /4.P")) {
                        gamename = gamename.replace(" /4.P", " /5.P")
                    } else {
                        gamename += ' /1.P'
                    }
                    gamenameElement.innerText = gamename
                    gametext.innerText = "Você derrota Vor'Thul após um grande esforço. Suas cinzas se transformam em 25 moedas e uma poção de cura."
                    gameElife.innerText = `Vida: 0`
                    gameElife.style.color = 'rgb(255, 0, 0)'
                    gamestart2.style.display = 'inline'
                    gamefight1.style.display = 'none'
                    gamefight2.style.display = 'none'
                    coin += 25
                    gamecoin.innerText = `Moeda: ${coin}`
                    potion += 1
                    gamecoin.style.color = 'rgb(186, 170, 51)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(49, 181, 49, 0.8), 10px 0px 20px 0px rgba(255, 255, 0, 0.8)'
                    gameimg.setAttribute('src', '../Imagens/enemy.jpg')
                    vorthul = 1
                    gameswamp.style.display = 'inline'
                    gameEinfo.style.display = 'none'
                }
            }
        } else if (fight === 2) {
            if (life < 100) {
                if (potion >= 1) {
                    const gamenameElement = document.getElementById('gamename')
                    let newGamename = gamenameElement.innerText
                    potion -= 1
                    life += 30
                    if (newGamename.includes(" /5.P")){
                        newGamename = newGamename.replace(" /5.P", " /4.P")
                    } else if (newGamename.includes(" /4.P")){
                        newGamename = newGamename.replace(" /4.P", " /3.P")
                    } else if (newGamename.includes(" /3.P")){
                        newGamename = newGamename.replace(" /3.P", " /2.P")
                    } else if (newGamename.includes(" /2.P")){
                        newGamename = newGamename.replace(" /2.P", " /1.P")
                    } else {
                        newGamename = newGamename.replace(" /1.P", "")
                    }
                    gamenameElement.innerText = newGamename
                    gamelife.innerText = `Vida: ${life}`
                    gametext.innerText = "Você toma uma poção de cura e restaura 30 de vida."
                    if (life > 100) {
                        life = 100
                        gamelife.innerText = `Vida: ${life}`
                    }
                } else {
                    window.alert('Você não tem poção!')
                }
            } else {
                window.alert('Você já tem o máximo de vida!')
            }
        } else if (fight === 3) {
            if (run === 0){
                avend(5)
            } else if (run === 1) {
                avstart(2)
            }
        }
    } else if (gstart === 3) {
        gamefight0.style.display = 'none'
        gameElife.innerText = `Vida: ${bosslife}`
        gameElife.style.color = 'rgb(0, 255, 0)'
        gamefight1.style.display = 'inline'
        gamefight2.style.display = 'inline'
        if (fight === 1) {
            if (weapon === 0){
                bosslife -= 3
                life -= 25
                gameElife.innerText = `Vida: ${bosslife}`
                gamelife.innerText = `Vida: ${life}`
                gametext.innerText = "Você ataca Esmaralda e aplica 3 de dano. Ela contra-ataca com 25 de dano."
                if (life <= 100) {
                    gamelife.style.color = 'rgb(49, 181, 49)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 255, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                } else {
                    gamelife.style.color = 'rgb(115, 177, 198)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                }
                if (life <= 0) {
                    avend(7)
                } else if (bosslife<= 0){
                    gametext.innerText = "Você derrota Esmaralda após uma grande batalha. Sua aventura está finalmente concluída e você se torna o Rei do Vale de Dragorin."
                    gameElife.innerText = `Vida: 0`
                    gameElife.style.color = 'rgb(255, 0, 0)'
                    gamefight1.style.display = 'none'
                    gamefight2.style.display = 'none'
                    gameimg.setAttribute('src', '../Imagens/rei.jpg')
                    gamerestart.style.display = 'inline'
                    gameEinfo.style.display = 'none'
                }
            } else if (weapon === 1) {
                bosslife -= 7
                life -= 8
                gameElife.innerText = `Vida: ${bosslife}`
                gamelife.innerText = `Vida: ${life}`
                gametext.innerText = "Você ataca Esmaralda e aplica 7 de dano. Ela contra-ataca com 7 de dano."
                if (life <= 100) {
                    gamelife.style.color = 'rgb(49, 181, 49)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 255, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                } else {
                    gamelife.style.color = 'rgb(115, 177, 198)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                }
                if (life <= 0) {
                    avend(7)
                } else if (bosslife <= 0){
                    gametext.innerText = "Você derrota Esmaralda após uma grande batalha. Sua aventura está finalmente concluída e você se torna o Rei do Vale de Dragorin."
                    gameElife.innerText = `Vida: 0`
                    gameElife.style.color = 'rgb(255, 0, 0)'
                    gamerestart.style.display = 'inline'
                    gamefight1.style.display = 'none'
                    gamefight2.style.display = 'none'
                    gameimg.setAttribute('src', '../Imagens/rei.jpg')
                    gameEinfo.style.display = 'none'
                }
            } else if (weapon === 2) {
                bosslife -= 8
                life -= 9
                gameElife.innerText = `Vida: ${bosslife}`
                gamelife.innerText = `Vida: ${life}`
                gametext.innerText = "Você ataca Esmaralda e aplica 8 de dano. Ela contra-ataca com 10 de dano."
                if (life <= 100) {
                    gamelife.style.color = 'rgb(49, 181, 49)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 255, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                } else {
                    gamelife.style.color = 'rgb(115, 177, 198)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                }
                if (life <= 0) {
                    avend(7)
                } else if (bosslife <= 0){
                    gametext.innerText = "Você derrota Esmaralda após uma grande batalha. Sua aventura está finalmente concluída e você se torna o Rei do Vale de Dragorin."
                    gameElife.innerText = `Vida: 0`
                    gameElife.style.color = 'rgb(255, 0, 0)'
                    gamerestart.style.display = 'inline'
                    gamefight1.style.display = 'none'
                    gamefight2.style.display = 'none'
                    gameimg.setAttribute('src', '../Imagens/rei.jpg')
                    gameEinfo.style.display = 'none'
                }
            } else if (weapon === 3) {
                bosslife -= 12
                life -= 13
                gametext.innerText = "Você ataca Esmaralda e aplica 13 de dano. Ela contra-ataca com 9 de dano."
                gameElife.innerText = `Vida: ${bosslife}`
                gamelife.innerText = `Vida: ${life}`
                if (life <= 100) {
                    gamelife.style.color = 'rgb(49, 181, 49)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 255, 0, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                } else {
                    gamelife.style.color = 'rgb(115, 177, 198)'
                    gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 0, 0, 0.8)'
                }
                if (life <= 0) {
                    avend(7)
                } else if (bosslife <= 0){
                    gametext.innerText = "Você derrota Esmaralda após uma grande batalha. Sua aventura está finalmente concluída e você se torna o Rei do Vale de Dragorin.."
                    gameElife.innerText = `Vida: 0`
                    gameElife.style.color = 'rgb(255, 0, 0)'
                    gamerestart.style.display = 'inline'
                    gamefight1.style.display = 'none'
                    gamefight2.style.display = 'none'
                    gameimg.setAttribute('src', '../Imagens/rei.jpg')
                    gameEinfo.style.display = 'none'
                }
            }
        } else if (fight === 2) {
            if (life < 100) {
                if (potion >= 1) {
                    const gamenameElement = document.getElementById('gamename')
                    let newGamename = gamenameElement.innerText
                    potion -= 1
                    life += 30
                    if (newGamename.includes(" /5.P")){
                        newGamename = newGamename.replace(" /5.P", " /4.P")
                    } else if (newGamename.includes(" /4.P")){
                        newGamename = newGamename.replace(" /4.P", " /3.P")
                    } else if (newGamename.includes(" /3.P")){
                        newGamename = newGamename.replace(" /3.P", " /2.P")
                    } else if (newGamename.includes(" /2.P")){
                        newGamename = newGamename.replace(" /2.P", " /1.P")
                    } else {
                        newGamename = newGamename.replace(" /1.P", "")
                    }
                    gamenameElement.innerText = newGamename
                    gamelife.innerText = `Vida: ${life}`
                    gametext.innerText = "Você toma uma poção de cura e restaura 30 de vida."
                    if (life > 100) {
                        life = 100
                        gamelife.innerText = `Vida: ${life}`
                    }
                } else {
                    window.alert('Você não tem poção!')
                }
            } else {
                window.alert('Você já tem o máximo de vida!')
            }
        }
    }
}

function avdialog(dialog) {
    if (gstart === 1) {
        if (dialog === 1) {
            man = 1
            gameimg.setAttribute('src', '../Imagens/conversa.jpg')
            gamedrink1.style.display = 'none'
            gamedrink2.style.display = 'none'
            gamedrink3.style.display = 'none'
            gamedialog1.style.display = 'none'
            gamedialog2.style.display = 'inline'
            gamestart1.style.display = 'none'
            gamereturn.style.display = 'inline'
            gametext.innerText = 'O homem começa a contar a história do Castelo da Lua Esmeralda. Ele diz que nenhum aventureiro conseguir realizar esse feito, mas, caso você consiga, se tornaria o rei do Vale de Dragorin.'
        } else if (dialog === 2) {
            gamedialog3.style.display = 'inline'
            gamedialog2.style.display = 'none'
            gametext.innerText = 'Ele conta que já foi um dos aventureiros que tentou enfretar o guardião, e diz que apenas saiu com vida pois seu companheiro se sacrificou por ele.'
        } else if (dialog === 3) {
            gamedialog3.style.display = 'none'
            gameend2.style.display = 'inline'
            gametext.innerText = 'O homem finaliza dizendo que será um dos piores momentos de sua vida, mas que ele acredita em seu potêncial.'
        } else if (dialog === 4) {
            if (weapon === 1 || weapon === 0) {
                coin += 15 
                gamedialog4.style.display = 'none'
                gameend3.style.display = 'none'
                gamestart1.style.display = 'inline'
                gamecoin.innerText = `Moeda: ${coin}`
                gamecoin.style.color = 'rgb(186, 170, 51)'
                gametext.innerText = 'Sua mãe entende seu objetivo e lhe da algumas moedas. Você sai de casa com um aperto no coração.'
                gameinfo.style.boxShadow = '-10px 0px 20px 0px rgba(0, 0, 255, 0.8), 10px 0px 20px 0px rgba(255, 255, 0, 0.8)'
            } else {
                gameend3.style.display = 'none'
                gamestart1.style.display = 'inline'
                gamedialog4.style.display = 'none'
                gametext.innerText = 'Sua mãe entende seu objetivo e lhe da um beijo. Você sai de casa com um aperto no coração.'
            }
        }
    }
}

function restart() {
    location.reload()
}

// Flavio Augusto, Enrico Bozza, João Vitor Hernandes