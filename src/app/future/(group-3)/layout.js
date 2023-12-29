import ClientComponent3 from '../../components/ClientComponent3'
import SharedComponent from '../../components/SharedComponent'

export default function Layout3({ children }) {
    return <SharedComponent renderProp={ClientComponent3}>{children}</SharedComponent>
}