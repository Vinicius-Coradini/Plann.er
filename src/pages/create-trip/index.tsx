import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'

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

    function creatTrip(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

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
                    <DestinationAndDateStep
                        isGuestsInputOpen={isGuestsInputOpen}
                        closeGuestInput={closeGuestInput}
                        openGuestInput={openGuestInput}
                    />

                    {/*INVITE FRIENDS*/}
                    {isGuestsInputOpen && (
                        <InviteGuestsStep
                            openGuestsModal={openGuestsModal}
                            emailsToInvite={emailsToInvite}
                            openConfirmTripModal={openConfirmTripModal}
                        />
                    )}
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
                <ConfirmTripModal
                    closeConfirmTripModal={closeConfirmTripModal}
                    creatTrip={creatTrip}
                />
            )}

        </div >
    )
}
