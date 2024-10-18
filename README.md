## Bosta's Task for Frontend Developer Position

### Important Note
Unfortunately, time wasn't on my side here, so the header isn't responsive. Following a mobile-first approach was hard as the provided design was desktop view. The page also isn't completely matching the design. There were additional minor changes I had in mind that I couldn't perform.

### Project Setup
In this task, I used Vite to create my React app using the TypeScript template. I aimed to separate everything as much as possible—logic from design, types from utils, etc. You'll find that I was trying to follow the atomic design approach in the folder structure.

### Achievements
Here are tasks I accomplished perfectly:

1. **Type System**: Having an almost perfect typed system.
2. **Contexts**: Implementing the required contexts to help build the website (data context, locale context).
3. **Hooks**: Implementing the required hooks (hooks for contexts and `useBreakingPoints` for responsiveness).
4. **Localization**: Implementing a nearly perfect localization system without using any third-party libraries.

### Areas for Improvement
There were also some tasks I wasn't completely satisfied with:

1. **Header Responsiveness**: The header is not fully responsive, and there are differences from the design.
2. **Fallback Pages**: No page to fallback when no data is provided, along with better error handling.
3. **Search Functionality**: The track shipment search does not close when the search ends, and there is a need for better loading state handling for components.
4. **Localization**: Reasons and hubs should show in Arabic to match the design; I believe this should be handled from the backend.
5. **Inline Styles**: Aiming to avoid (totally) the usage of inline styles. I will also revisit the decision to use Ant Design.

### Installation and Usage
To run the project locally, follow these steps:

1. Clone the repository:
```bash
git clone <repository-url>
```
2. Navigate to the project directory:
```bash
cd <project-directory>
```
3. Install the dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```
or you can just visit the deployment link instead: https://fancy-pixie-7b937e.netlify.app/

### Conclusion
I’m proud of my work, and all these enhancements could've been done if I had more time.
