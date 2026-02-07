export default function Spinner({
    size = 'md',
    color = '#ffffff'
}: {
    size?: 'sm' | 'md' | 'lg';
    color?: string;
}) {
    const sizeMap = {
        sm: '16px',
        md: '24px',
        lg: '40px',
    };

    return (
        <div
            style={{
                width: sizeMap[size],
                height: sizeMap[size],
                border: `2px solid rgba(255, 255, 255, 0.1)`,
                borderTop: `2px solid ${color}`,
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
            }}
        />
    );
}
