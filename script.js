class Tarefas {
    constructor() {
        this.arrayTarefa = []
    }

    listar() {
        let tarefa = this.lerTarefa()
        if (this.validaTarefa(tarefa)) {
            this.addTarefa(tarefa)
        }
        this.listaTarefas()
        this.excluir()

    }
    listaTarefas() {
        let tbody = document.getElementById("corpoTabela")
        tbody.innerText = ""
        for (let i = 0; i < this.arrayTarefa.length; i++) {
            let tr = tbody.insertRow()
            let td_tarefa = tr.insertCell()
            let td_acao = tr.insertCell()

            td_tarefa.innerText = this.arrayTarefa[i].nomeTarefa

            let img_excluir = document.createElement("img")
            img_excluir.src = "images/excluir.png"
            img_excluir.setAttribute("onclick", "tarefa.deletar(" + this.arrayTarefa[i].id + ")")
            td_acao.classList.add("center")
            td_acao.appendChild(img_excluir)

        }
    }

    addTarefa(tarefa) {
        tarefa.id = Math.random()
        this.arrayTarefa.push(tarefa)

    }

    lerTarefa() {
        let tarefa = {}
        tarefa.nomeTarefa = document.getElementById("task").value

        return tarefa
    }

    excluir() {
        document.getElementById("task").value = ""
    }

    validaTarefa(tarefa) {
        let msg = ""
        if (tarefa.nomeTarefa == msg) {
            msg = "informe a tarefa a ser adicionada \n"
        }
        if (msg != "") {
            alert(msg)
            return false
        }
        return true
    }

    deletar(id) {
        let new_array = []
        for (let i = 0; i < this.arrayTarefa.length; i++) {
            if (this.arrayTarefa[i].id != id) {
                new_array.push(this.arrayTarefa[i])

            }

        }
        this.arrayTarefa = new_array
        this.listaTarefas()
    }
}

var tarefa = new Tarefas()