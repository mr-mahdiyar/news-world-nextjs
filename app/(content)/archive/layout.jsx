// Parallel Routes allows you to simultaneously or conditionally render one or more pages within the same layout.
// They are useful for highly dynamic sections of an app, such as dashboards and feeds on social sites.

export default function layout({ latest, archive }) {//Slots are passed as props to the shared parent layout.
return <>
    {archive}
    {latest}
</>
}
