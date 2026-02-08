export default function Spinner({
    size = 'md',
    color = '#ffffff'
}: {
    size?: 'sm' | 'md' | 'lg';
    color?: string;
}) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-10 h-10',
    };

    return (
        <div
            className={`${sizeClasses[size]} border-2 border-white/10 rounded-full animate-spin`}
            style={{ borderTopColor: color }}
        />
    );
}
