
export default function Dashboard({ peoples }) {
    const activeCount = peoples?.filter(({ status }) => status === 'approved').length ?? '-------'
    const pendingCount = peoples?.filter(({ status }) => status === 'pending').length ?? '-------'

    return (
        <section className="dashboard flex gap8">
            <article className={'active'}>
                <h3  className={'skeleton ' + ((peoples) ? 'value' : 'loader')}>{activeCount}</h3>
                <h4>Active</h4>
            </article>
            <article className={'pending'}>
                <h3 className={'skeleton ' + ((peoples) ? 'value' : 'loader')}>{pendingCount}</h3>
                <h4>Pending</h4>
            </article>
        </section>
    )
}
