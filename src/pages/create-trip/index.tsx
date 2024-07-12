import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus, User, Mail } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'

export function CreatTripPage() {

    const navigate = useNavigate()

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)


    const [emailsToInvite, setEmailsToInviter] = useState([
        'vinicius@outlook.com'
    ])

    function openGuestInput() {
        setIsGuestsInputOpen(true)
    }

    function closeGuestInput() {
        setIsGuestsInputOpen(false)
    }

    function openGuestsModal() {
        setIsGuestsModalOpen(true)
    }

    function closeGuestsModal() {
        setIsGuestsModalOpen(false)
    }

    function openConfirmTripModal() {
        setIsConfirmTripModalOpen(true)
    }

    function closeConfirmTripModal() {
        setIsConfirmTripModalOpen(false)
    }

    function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const data = new FormData(event.currentTarget)
        const email = data.get('email')?.toString()

        {
            if (!email) {
                return
            }
        }

        //Verificação de Existência no Array
        if (emailsToInvite.includes(email)) {
            return alert('Convidado já adicionado')
        }

        //Adicionar array com array setEmailsToInviter
        setEmailsToInviter([
            ...emailsToInvite,
            email
        ])

        //Resetar formulario
        event.currentTarget.reset()
    }

    function removeEmailFromInvites(emailToRemove: string) {
        const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

        setEmailsToInviter(newEmailList)
    }

    function creatTrip() {
        navigate('/trips/123')
    }

    return (
        //FIRST SCREEN
        <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <div className="max-w-3xl w-full px-6 text-center space-y-10">

                <div className='flex flex-col items-center gap-3'>
                    <img src="src/img/logo_planner.svg" alt="logo_planner" />
                    <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
                </div>

                <div className='space-y-4'>
                    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                        <div className='flex items-center gap-2 flex-1'>
                            <MapPin className='size-5 text-zinc-400' />
                            <input disabled={isGuestsInputOpen} type="text" placeholder="Para onde você vai" className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                        </div>

                        <div className='flex items-center gap-2'>
                            <Calendar className='size-5 text-zinc-400' />
                            <input disabled={isGuestsInputOpen} type="text" placeholder="Quando?" className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
                        </div>

                        <div className='w-px h-6 bg-zinc-800' />

                        {/* CHANGE LOC */}
                        {isGuestsInputOpen ? (
                            <button onClick={closeGuestInput} className='bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700'>
                                Alterar local/data
                                <Settings2 className='size-5' />
                            </button>
                        ) : <button onClick={openGuestInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                            Continuar
                            <ArrowRight className='size-5' />
                        </button>}
                    </div>

                    {/*INVITE FRIENDS*/}
                    {isGuestsInputOpen ? (
                        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                            <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1 text-left'>
                                <UserRoundPlus className='size-5 text-zinc-400' />
                                {emailsToInvite.length > 0 ? (
                                    <span className='text-zinc-100 text-lg flex-1'>{emailsToInvite.length} pessoas(s) convidada(s)</span>
                                ) : (
                                    <span className='text-zinc-400 text-lg flex-1'>Quem estará na viagem?</span>
                                )}
                            </button>

                            <div className='w-px h-6 bg-zinc-800' />

                            <button onClick={openConfirmTripModal} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                                Confirmar a viagem
                                <ArrowRight className='size-5' />
                            </button>
                        </div>

                    ) : null}
                </div>

                <p className="text-zinc-500 text-sm">Ao planejar sua viagem pela plann.er você automaticamente concorda<br />
                    com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.</p>
            </div>

            {/*MODAL*/}
            {isGuestsModalOpen && (
                <InviteGuestsModal
                    emailsToInvite={emailsToInvite}
                    addNewEmailToInvite={addNewEmailToInvite}
                    removeEmailFromInvites={removeEmailFromInvites}
                    closeGuestsModal={closeGuestsModal}
                />
            )}

            {isConfirmTripModalOpen && (
                <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
                    <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
                        <div className='space-y-2'>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
                                <button onClick={closeConfirmTripModal}>
                                    <X className='size-5 text-zinc-400' />
                                </button>
                            </div>
                            <p className='text-sm text-zinc-400'>Para concluir a criação da viagem para <span className="font-semibold text-zinc-100">Florianópolis</span>, Brasil nas datas de <span className="font-semibold text-zinc-100">16 a 27 de Agosto de 2024</span> preencha seus dados abaixo:</p>
                        </div>


                        <form onSubmit={addNewEmailToInvite} className='space-y-3'>
                            <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                                <User className='text-zinc-400 size-5' />
                                <input
                                    name='name'
                                    placeholder="Seu nome completo"
                                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                            </div>

                            <div className='h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                                <Mail className='text-zinc-400 size-5' />
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Seu e-mail pessoal"
                                    className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
                            </div>

                            <button onClick={creatTrip} type='submit' className="w-full justify-center bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400 transition duration-200 ease-in-out">
                                Confirmar criação da viagem
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div >
    )
}