import ProfileReducer, {toAddPost} from './ProfileReducer.js'


it('new post should be added', ()=>{
  // 1 test data
  let action = toAddPost ('it-kms');
  let state = {
      PostsData : [{text: "POST: Hi!"},
                   {text: "POST: Sometext"},
                   {text: "POST: Sometext"},],

      Profile : " ",
  status: ""
}
  

 let newState = ProfileReducer(state, action);
 // 3 expectation
 expect(newState.PostsData.length).toBe(4);
})

