export const Links = function (prop) {
    return (
        <>
            <table>
                <tr>
                    <td>
                        <img src={prop.data.name}/>
                    </td>
                    <td>
                        <p><a href={prop.data.url}>{prop.data.url}</a></p>
                    </td>
                </tr>
            </table>
        </>
    )
}