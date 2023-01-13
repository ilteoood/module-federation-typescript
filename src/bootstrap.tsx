import { AnotherButton } from 'moduleFederationTypescript/anotherButton'
import Button from 'moduleFederationTypescript/button'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
    <div>
        <Button onClick={console.log}/>
        <AnotherButton onClick={console.error} />
    </div>
)
