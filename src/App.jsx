const issues = [
    {
        id:1,
        status:'New',
        owner:'Chaitanya',
        effort: 5,
        created: new Date('02-01-2022'),
        due: undefined,
        title:'Error in console when clicking on Add'
    },
    {
        id: 2,
        status: 'Unassigned',
        owner: 'Rohan',
        effort: 14,
        created: new Date('12-12-2021'),
        due: new Date('02-01-2022'),
        title:'Missing bottom border on panel'
    },
    {
        id:3,
        status: 'Unassigned',
        owner: undefined,
        effort: 19,
        created: new Date('01-11-2021'),
        due: new Date('10-02-2022'),
        title:'Submit button disappears if long text is present'
    },
    {
        id:3,
        status: 'Unassigned',
        owner: undefined,
        effort: 19,
        created: new Date('01-11-2021'),
        due: new Date('10-02-2022'),
        title:'Submit button disappears if long text is present'
    }
]

class IssueFilter extends React.Component {
    render() {
        return (
            <div id="contents">This is a placeholder for the issue filter.</div>
        )
    }
}

class IssueTable extends React.Component {
    render() {
        const issueRow = issues.map(issue => <IssueRow key={issue.id} issue={issue} />)
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Due Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {issueRow}
                </tbody>
            </table>
        )
    }
}

class IssueRow extends React.Component{
    render(){
        const issue = this.props.issue
        return(
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.due ?issue.due.toDateString() : ''}</td>
                <td>{issue.title}</td>
            </tr>
        )
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the issue add.</div>
        )
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable />
                <hr />
                <IssueAdd />
            </React.Fragment>
        )
    }
}

const element = <IssueList />;

ReactDOM.render(element, document.getElementById('contents'));