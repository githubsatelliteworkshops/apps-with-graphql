const updateIssueCommentBody = `
  mutation($id:ID!, $newBody:String!) {
    updateIssueComment(input: {id: $id, body: $newBody}) {
      issueComment {
        body
      }
    }
  }
`

const updateIssueBody = `
  mutation($id:ID!, $newBody:String!) {
    updateIssue(input: {id: $id, body: $newBody}) {
      issue {
        body
      }
    }
  }
`

const updatePullRequestBody = `
  mutation($id:ID!, $newBody:String!) {
    updatePullRequest(input: {id: $id, body: $newBody}) {
      pullRequest {
        body
      }
    }
  }
`

function updateBodyMutationFor(name) {
  switch(name) {
    case 'issue_comment':
      return updateIssueCommentBody;
      break;
    case "issues":
      return updateIssueBody;
      break;
    case "pull_request":
      return updatePullRequestBody;
      break;
  }
}

module.exports = updateBodyMutationFor;
