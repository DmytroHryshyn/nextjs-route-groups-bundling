'use client'

// we use the PageWrapper pattern so we have a shared client component most of the pages
export default function SharedComponent(props) {
    return <div>
        {props.renderProp(<div>{props.children}</div>)}
    </div>
}