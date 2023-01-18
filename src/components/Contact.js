import { contact } from './Portfolio'

const Contact = () => {
    if (!contact.email) return null

    return (
        <section className='section contact center' id='contact'>
        <h2>Contact</h2>
        <a href={`mailto:${contact.email}`}>
            <span type='button' className='btn btn--outline'>
            Email me
            </span>
        </a>
        </section>
    )
}

export default Contact