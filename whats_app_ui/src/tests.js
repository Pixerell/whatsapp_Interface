import { renderHook, act } from '@testing-library/react-hooks';
import { useContactList } from './helpers/useContactList';

test('appendMessageToContact appends new message to contact', () => {
    const { result } = renderHook(() => useContactList());
    const [contactList, updateContactList, appendMessageToContact] = result.current;

    // Create a mock contact with an empty message history
    const contact = {
        id: 2,
        messageHistory: [],
    };

    const newMessage = {
        id: 1,
        content: 'Hello',
        sender: 'Me',
        time: '2023-05-19T12:00:00Z',
    };

    // Invoke appendMessageToContact
    act(() => {
        appendMessageToContact(contact.id, newMessage);
    });

    // Check the updated contact list
    expect(result.current[0]).toEqual([
        {
            id: 1,
            messageHistory: [newMessage],
        },
    ]);
});
