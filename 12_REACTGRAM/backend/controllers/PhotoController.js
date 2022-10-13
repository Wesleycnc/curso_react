const Photo = require("../models/Photo")
const User = require("../models/User")

const mongoose = require("mongoose")

// Inserit foto, relacionando com o usuário
const insertPhoto = async (req, res) => {

    const { title } = req.body
    const image = req.file.filename

    const reqUser = req.user

    const user = await User.findById(reqUser._id)

    // Criar foto
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name
    })

    // Se der errado vai cair nesse erro
    if (!newPhoto) {
        res.status(422).json({
            errors: ["Houve um problema, por favor tente novamente mais tarde."]
        })
        return
    }
    // Se a foto for criada com sucesso, retornara os dados
    res.status(201).json(newPhoto)
}

//Remover foto do banco
const deletePhoto = async (req, res) => {
    const { id } = req.params

    const reqUser = req.user

    try {
        const photo = await Photo.findById(mongoose.Types.ObjectId(id))

        // Checar se a foto existe 
        if (!photo) {
            res.status(404).json({ errors: ["Foto não encontrada."] })
            return
        }

        // Checar se a foto pertence ao usuário, se não pertencer ele cairá nesse erro, e se pertencer ele continuará e deletará a foto
        if (!photo.userId.equals(reqUser._id)) {
            res.status(422).json({ errors: ["Ocorreu um erro, por favor tente novamente mais tarde"] })
        }
        await Photo.findByIdAndDelete(photo._id)

        res.status(200).json({ id: photo._id, message: "Foto excluida com sucesso." })
    } catch (error) {
        res.status(404).json({ errors: ["Foto não encontrada."] })
        return
    }
}

// Pegar todas as fotos
const getAllPhotos = async (req, res) => {
    // Aqui criamos uma variável que pega todas as fotos com find e usamos o método sort para ordenar e aparecer as fotos novas, e por fim usamos exec para executar a query
    const photos = await Photo.find({}).sort([["createdAt", -1]]).exec()


    return res.status(200).json(photos)
}

// Pegar foto do usuário 
const getUserPhotos = async (req, res) => {
    const { id } = req.params
    const photos = await Photo.find({ userId: id }).sort([["createdAt", -1]]).exec()

    return res.status(200).json(photos)
}

// Pegar foto pelo id
const getPhotoById = async (req, res) => {
    const { id } = req.params

    const photo = await Photo.findById(mongoose.Types.ObjectId(id))

    // Checar se a foto existe 
    if (!photo) {
        res.status(404).json({ errors: ["Foto não encontrada"] })
        return
    }

    res.status(200).json(photo)
}

// Atualizar foto
const updatePhoto = async (req, res) => {
    const { id } = req.params
    const { title } = req.body

    const reqUser = req.user

    const photo = await Photo.findById(id)

    // Checar se foto existe
    if (!photo) {
        res.status(404).json({ errors: ["Foto não encontrada"] })
        return
    }
    // verificar se a foto pertence ao usuário
    if (!photo.userId.equals(reqUser._id)) {
        res.status(422).json({ errors: ["Ocorreu um erro, por favor tente novamente mais tarde"] })
        return
    }

    if (title) {
        photo.title = title
    }

    await photo.save()

    res.status(200).json({ photo, message: "Foto atualizada com sucesso!" })

}
// Funcionalidade do like
const likePhoto = async (req, res) => {
    const { id } = req.params

    const reqUser = req.user

    const photo = await Photo.findById(id)

    // Checar se foto existe
    if (!photo) {
        res.status(404).json({ errors: ["Foto não encontrada"] })
        return
    }

    // Checar se o usuário ja deu o like
    if (photo.likes.includes(reqUser._id)) {
        res.status(422).json({ errors: ["Você já curtiu a foto."] })
        return
    }

    // Colocar o like do usuário dentro de um array
    photo.likes.push(reqUser._id)

    photo.save()

    res.status(200).json({ photoId: id, userId: reqUser._id, message: "A foto foi curtida" })
}

// Funcionalidade de comentário 
const commentPhoto = async (req, res) => {
    const { id } = req.params
    const { comment } = req.body

    const reqUser = req.user

    const user = await User.findById(reqUser._id)

    const photo = await Photo.findById(id)

    // Checar se foto existe
    if (!photo) {
        res.status(404).json({ errors: ["Foto não encontrada"] })
        return
    }

    // Colocar comentario no array
    const userComment = {
        comment,
        userName: user.name,
        userImage: user.profileImage,
        userId: user._id
    }

    photo.comments.push(userComment)

    await photo.save

    res.status(200).json({
        comment: userComment,
        message: "O comentário foi adicionado com sucesso!"
    })
}

// Busca foto pelo titulo
const searchPhotos = async(req, res) => {
    const {q} = req.query

    const photos = await Photo.find({title: new RegExp(q, "i")}).exec()

    res.status(200).json(photos)
}

module.exports = { insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotoById, updatePhoto, likePhoto, commentPhoto, searchPhotos }