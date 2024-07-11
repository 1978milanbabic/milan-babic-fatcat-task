# Environment

|       | Version     |
|-------|-------------|
| Node  | v20.15.0    |
| npm   | 10.7.0      |

## Added Routes for Custom Use of Task Criteria

I felt free to add routes/scenes for generating task components in the custom layout.  
The result are routes: `/list`, `/form`, `/page` according to required task components.  
I also felt free to change links on the "Home" page to lead to every page/task to make it easier for inspection.  
You'll see it under the "read more" link.  

## List Component

Created a hook `useFetchUsers` and a `UserList` reusable component.

## Form Generator Component

Created reusable `FormGenerator`, `usePostData` hook, as well as `CustomForm` component and applied to the `/form` route/scene.

## Page Generator Component

Created reusable `PageGenerator` component and applied to the `/page` route/scene.
