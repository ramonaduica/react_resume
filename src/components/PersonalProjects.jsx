export const PersonalProjects = function (prop) {
    return (
        <>
            <p>
                {prop.data.details}
                <br/><br/>
                {prop.data.technology}
            </p>


        </>
    )
}