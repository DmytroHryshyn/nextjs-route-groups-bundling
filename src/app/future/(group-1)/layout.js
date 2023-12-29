import ClientComponent1 from '../../components/ClientComponent1'
import SharedComponent from '../../components/SharedComponent'

export default function Layout1({ children }) {
    // Simulating PageWrapper + getLayout pattern from next v < 13.
    return <SharedComponent renderProp={ClientComponent1}>{children}</SharedComponent>
}