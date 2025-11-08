import React from 'react';
// app/blog/layout.tsx

export default function PostLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ padding: "1rem" }}>
            {children}
        </div>
    );
}
