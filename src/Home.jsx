import { useState } from 'react'
import { FaGithub } from "react-icons/fa";
const puzzles = [
    {
        id: 1,
        image: "/chess_avoid.png",
        link: "https://chess-avoid-puzzle.vercel.app/",
        github:"https://github.com/ccl-iitgn/chess_avoid_puzzle",
        alt: "chess-avoidance-puzzle",
        title: "Chess Avoidance Puzzle (chota satranj)",
        authors: "Pattem Bhanu Prakash",
        year: "2025",
        description: [
            "Chess Avoidance Puzzle is played on an m×n grid where various chess pieces must be placed.",
            "The objective is to arrange all the pieces on the board such that no piece can attack another, following standard chess movement rules."
        ]
    },
    {
        id: 2,
        image: "/jumping_julia.png",
        link: "https://jumpingjulia.vercel.app/",
        github:"https://github.com/ccl-iitgn/jumpingjulia",
        alt: "jumping_julia_puzzle",
        title: "Jumping Julia",
        authors: "Pattem Bhanu Prakash",
        year: "2025",
        description: [
            "Jumping Julia is a step maze where you move from start to end by jumping exactly the number shown in each cell in any direction."
        ]
    },
    {
        id: 3,
        image: "/no_right_turn.png",
        link: "https://norightturn.vercel.app/",
        alt: "no_right_turn_maze_puzzle",
        title: "No Right Turn Maze",
        authors: "Pattem Bhanu Prakash",
        github:"https://github.com/ccl-iitgn/no_right_turn",
        year: "2025",
        description: [
            "A maze where the path from start to end must be completed without making any right turns."
        ]
    },
    {
        id: 8,
        image: "/pixel_art_work.png",
        alt: "pixel_art_work",
        github:"https://github.com/ccl-iitgn/pixel_art_work",
        title: "Pixel Art Work",
        authors: "Pattem Bhanu Prakash",
        link: "https://pixel-art-work.onrender.com/",
        year: "2025",
        description: [
            "Transform images into 300-piece pixel puzzles, challenging players to reconstruct the artwork accurately.",
            "Combines logic, spatial reasoning, and creativity, providing a hands-on, interactive puzzle experience."
        ]
    },
    {
        id: 4,
        image: "/manifold.png",
        alt: "manifold_puzzle",
        link: "https://paperfolding.vercel.app/",
        github:"https://github.com/ccl-iitgn/paper_folding",
        title: "Manifold",
        authors: "Pattem Bhanu Prakash",
        year: "2025",
        description: [
            "A paper folding puzzle played on an 8×8 grid, which must be folded into a 4×4 grid.",
            "The goal is to fold the paper so that one target image appears on the front and a different one on the back."
        ]
    },
    {
        id: 5,
        image: "/upitup.png",
        alt: "upitup_puzzle",
        title: "Upitup (Rolling Cubes Puzzle)",
        link: "https://upitup-ten.vercel.app/",
        github:"https://github.com/ccl-iitgn/upitup",
        authors: "Pattem Bhanu Prakash",
        year: "2025",
        description: [
            "A rolling cubes puzzle played on a 3×3 grid with 8 cubes and one empty space.",
            "The objective is to roll the cubes into the empty cell to form a given alphabet shape on their top faces."
        ]
    },
    {
        id: 6,
        image: "/four_colors.png",
        alt: "four_colors_puzzle",
        github:"https://github.com/ccl-iitgn/four_colors",
        link: "https://fourcolors-mu.vercel.app/",
        title: "Four Colors (Color Matching Puzzle)",
        authors: "Pattem Bhanu Prakash",
        year: "2025",
        description: [
            "A puzzle on an m×n grid filled with polyomino pieces and four predefined colors.",
            "Some pieces are pre-colored, and the goal is to color the remaining ones so that no adjacent sides share the same color."
        ]
    },
    {
        id: 7,
        image: "/hexgon_edge_match.png",
        alt: "hexgon_edge_match_puzzle",
        github:"https://github.com/ccl-iitgn/hexagon_edge_matching",
        link: "https://hexagon-edge-matching.vercel.app/",
        title: "Hexagon Edge Matching Puzzle",
        authors: "Pattem Bhanu Prakash",
        year: "2025",
        description: [
            "An edge-matching puzzle using 24 triangles that must be arranged to fill a hexagon shape.",
            "The goal is to place all triangles so that the edges of adjacent triangles have matching colors or patterns."
        ]
    },
    {
        id: 8,
        image: "/cube_edge_match.png",
        alt: "cube_edge_match_puzzle",
        github:"https://github.com/ccl-iitgn/edge_matching_3d",
        title: "3D Edge Matching Puzzle (Cube Edge Matching)",
        authors: "Pattem Bhanu Prakash",
        link: "https://edge-matching-3d.vercel.app/",
        year: "2025",
        description: [
            "3D Cube Edge Matching is a logic-based puzzle where each cube face has a pattern, and adjacent cube edges must match perfectly according to predefined rules.",
            "The objective is to rotate and position the cubes so that the patterns on touching edges align consistently across the entire structure."
        ]
    },
    // {
    //     id: 9,
    //     image: "/skyscraper.png",
    //     alt: "skyscraper_puzzle",
    //     title: "Skyscraper Puzzle",
    //     authors: "Pattem Bhanu Prakash",
    //     year: "2025",
    //     description: [
    //         "Skyscraper Puzzle is a grid logic game where each row and column must contain buildings of heights 1 to N with no repeats.",
    //         "Numbers around the grid show how many buildings are visible from that side, with taller buildings blocking the view of smaller ones behind."
    //     ]
    // },
    // {
    //     id: 10,
    //     image: "/alphabet_fitting.png",
    //     alt: "alphabet_fitting_puzzle",
    //     title: "Alphabet fitting",
    //     authors: "Pattem Bhanu Prakash",
    //     year: "2025",
    //     description: [
    //         "Place specific letters into an M×N grid, fitting them according to given patterns or constraints without any overlaps.",
    //     ]
    // },
    // {
    //     id: 11,
    //     image: "/stack_it_up.png",
    //     alt: "stack_it_up_puzzle",
    //     title: "Alphabet fitting",
    //     authors: "Pattem Bhanu Prakash",
    //     year: "2025",
    //     description: [
    //         "Place specific letters into an M×N grid, fitting them according to given patterns or constraints without any overlaps.",
    //     ]
    // },
    // {
    //     id: 12,
    //     image: "/truchet.png",
    //     alt: "truchet_puzzle",
    //     title: "Truchet Puzzle",
    //     authors: "Pattem Bhanu Prakash",
    //     year: "2025",
    //     description: [
    //         "Arrange 16 cubes in a 4×4 grid to form continuous patterns, with each level requiring a specific target pattern to be completed.",
    //     ]
    // },
    // {
    //     id: 13,
    //     image: "/polymino.png",
    //     alt: "polymino_puzzle",
    //     title: "Polymino puzzle",
    //     authors: "Pattem Bhanu Prakash",
    //     year: "2025",
    //     description: [
    //         "Fit given polyomino pieces into an M×N grid without overlaps, filling the entire grid based on shape constraints.",
    //     ]
    // },
    // {
    //     id: 14,
    //     image: "/polymino.png",
    //     alt: "polymino_puzzle",
    //     title: "Polymino puzzle",
    //     authors: "Pattem Bhanu Prakash",
    //     year: "2025",
    //     description: [
    //         "Place puzzle pieces near a mirror to create symmetrical images, using reflection to form different target shapes or patterns.",
    //     ]
    // },
    {
        id: 15,
        image: "/square_edge_matching.png",
        alt: "square_edge_matching",
        title: "Square Edge Matching",
        github:"https://github.com/ccl-iitgn/square_edge_matching",
        authors: "Pattem Bhanu Prakash",
        link: "https://square-edge-matching.vercel.app/",
        year: "2025",
        description: [,
            "The objective is to rotate and position the square so that the patterns on touching edges align consistently across the entire structure."
        ]
    }
]

function Home() {
    return (
        <main className='home-page-main'>
            <section className='home-page-puzzles-section'>
                {puzzles.map((puzzle) => (
                    <div key={puzzle.id} className='home-page-puzzle-list' onClick={() => {
                        window.location.href = puzzle.link
                    }}>
                        <img src={puzzle.image} alt={puzzle.alt} />
                        <div>
                            <div className='home-page-container-heading'>
                                <p><b><a href={puzzle.link}>{puzzle.title}</a></b> by {puzzle.authors}, {puzzle.year} </p>
                                <span onClick={(e) => {
                                    e.stopPropagation()
                                    window.location.href=puzzle.github
                                }}><FaGithub /></span>
                            </div>

                            <ul>
                                {puzzle.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Home