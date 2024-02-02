import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { ClassNameValue } from 'tailwind-merge'
import { SearchIcon } from 'lucide-react';

interface SearchProps {
    placeholder?: string
    className?: ClassNameValue
}

const Search = ({ placeholder, className }: SearchProps) => {
    return (
        <div className={`${className} h-9 w-full flex flex-row items-center justify-center gap-2`}>
            <Input placeholder={placeholder} className="flex-1 h-full" />
            <Button size="icon">
                <SearchIcon className='h-4 w-4' />
            </Button>
        </div>
    )
}

export default Search