import ClientComponent2 from '../../components/ClientComponent2'
import SharedComponent from '../../components/SharedComponent'

export default function Layout2({ children }) {
    return <SharedComponent renderProp={ClientComponent2}>{children}</SharedComponent>
}