import { Link2, Plus } from "lucide-react";

export function ImportantLinks() {
    return (
        <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                    <div className='space-y-1.5'>
                        <span className="block font-medium text-zinc-100">Reserva do AirBnB</span>
                        <a href="https://www.airbnb.com.br/rooms/1047000116534635464646545646455644546544" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://www.airbnb.com.br/rooms/1047000116534635464646545646455644546544
                            \</a>
                    </div>
                    <Link2 className='text-zinc-400 size-5 shrink-0' />
                </div>
                <div className="flex items-center justify-between gap-4">
                    <div className='space-y-1.5'>
                        <span className="block font-medium text-zinc-100">Regras da casa</span>
                        <a href="https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000" className="block text-xs text-zinc-400 truncate hover:text-zinc-200">
                            https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000                                        \</a>
                    </div>
                    <Link2 className='text-zinc-400 size-5 shrink-0' />
                </div>
            </div>
            <button className='bg-zinc-800 text-zinc-200 w-full px-5 h-11 font-medium flex items-center gap-2 justify-center hover:bg-zinc-700'>
                <Plus className='size-5' />
                Cadastrar Novo Link
            </button>
        </div>
    )
}