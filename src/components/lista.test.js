import { render, screen } from '@testing-library/react';
import Lista from './lista';

test('renders list items', () => {
    // Arrange
    const items = ['Task 1', 'Task 2', 'Task 3'];

    // Act
    render(<Lista items={items} />);

    // Assert
    const task1Element = screen.getByText(/Task 1/i);
    const task2Element = screen.getByText(/Task 2/i);
    const task3Element = screen.getByText(/Task 3/i);

    expect(task1Element).toBeInTheDocument();
    expect(task2Element).toBeInTheDocument();
    expect(task3Element).toBeInTheDocument();
});
